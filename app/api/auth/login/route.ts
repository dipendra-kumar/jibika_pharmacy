import userModel from "@/models/user";
import connectMongo from "@/utils/connect-mongo";
import bcrypt from "bcrypt";
import { NextResponse } from "next/server";
import { encrypt } from "@/lib/lib";
import { cookies } from "next/headers";

export async function POST(req: Request, res: Response) {
  const { emailAddress, password, LOGIN_TYPE } = await req.json();
  if (!emailAddress || !password) {
    return NextResponse.json(
      {
        message: "Inputs required",
      },
      {
        status: 400,
      },
    );
  }

  try {
    await connectMongo();
    const user = await userModel.findOne({ emailAddress });
    if (!user) {
      return NextResponse.json(
        {
          message: "User not found!",
        },
        {
          status: 400,
        },
      );
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return NextResponse.json(
        {
          message: "Incorrect password!",
        },
        {
          status: 401,
        },
      );
    }

    if (LOGIN_TYPE === "admin" && !user.isAdmin) {
      return NextResponse.json(
        {
          message: "You are not authorized to access the page.",
        },
        {
          status: 403,
        },
      );
    }

    // Create the session
    const { fullName, address, phoneNumber } = user;
    const expires = new Date(Date.now() + 30 * 60 * 1000);
    const session = await encrypt({
      fullName,
      emailAddress,
      address,
      phoneNumber,
      expires,
    });

    // Save the session in a cookie
    cookies().set("session", session, {
      expires,
      httpOnly: process.env.NODE_ENV === "production",
    });

    const response = {
      message: "Welcome " + fullName.split(" ")[0],
    };
    return NextResponse.json(JSON.stringify(response), {
      status: 200,
    });
  } catch (error) {
    return NextResponse.json(
      {
        message: "Something went wrong",
      },
      {
        status: 500,
      },
    );
  }
}
