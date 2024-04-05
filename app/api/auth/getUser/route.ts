import { decrypt } from "@/lib/lib";
import userModel from "@/models/user";
import connectMongo from "@/utils/connect-mongo";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest, res: NextResponse) {
  try {
    const session = req.cookies.get("session")?.value;
    if (!session) {
      return NextResponse.json(
        {
          message: "Session not found",
        },
        {
          status: 401,
        },
      );
    }
    await connectMongo();
    const sessionData = await decrypt(session);
    const user = await userModel
      .findOne({
        emailAddress: sessionData.emailAddress,
      })
      .select("-password");

    if (!user) {
      return NextResponse.json(
        {
          message: "User not found",
        },
        {
          status: 404,
        },
      );
    }
    return NextResponse.json(
      {
        message: user,
      },
      {
        status: 200,
      },
    );
  } catch (error: any) {
    return NextResponse.json(
      {
        message: error.message,
      },
      {
        status: 500,
      },
    );
  }
}
