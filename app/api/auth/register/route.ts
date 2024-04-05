import userModel from "@/models/user";
import connectMongo from "@/utils/connect-mongo";
import bcrypt from "bcrypt";
import { NextResponse } from "next/server";

export async function POST(req: Request, res: Response) {
  const data = await req.json();
  const { fullName, emailAddress, password, cPassword, address, phoneNumber } =
    data;

  if (
    !fullName ||
    !emailAddress ||
    !password ||
    !cPassword ||
    !address ||
    !phoneNumber
  ) {
    return NextResponse.json(
      {
        message: "All fields are required",
      },
      {
        status: 400,
      },
    );
  }

  if (password !== cPassword) {
    return NextResponse.json(
      {
        message: "Passwords do not match",
      },
      {
        status: 400,
      },
    );
  }

  try {
    await connectMongo();
    const existingUser = await userModel.findOne({ emailAddress });
    if (existingUser) {
      return NextResponse.json(
        {
          message: "User already exists",
        },
        {
          status: 400,
        },
      );
    }
    const newUser = new userModel({
      fullName,
      emailAddress,
      password,
      address,
      phoneNumber,
    });

    await newUser.save();

    return NextResponse.json(
      {
        message: "User registered successfully",
      },
      {
        status: 201,
      },
    );
  } catch (error) {
    console.error("Registration error:", error);
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
