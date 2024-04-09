import userModel from "@/models/user";
import { IUser } from "@/types";
import connectMongo from "@/utils/connect-mongo";
import { NextResponse } from "next/server";

export const checkAdmin = async (emailAddress?: string) => {
  try {
    await connectMongo();
    const userData: IUser | null = await userModel.findOne({
      emailAddress,
    });
    if (!userData?.isAdmin) {
      NextResponse.json(
        {
          message: "Not authorized!",
        },
        {
          status: 401,
        },
      );
    }
    return true;
  } catch (error) {
    throw error;
  }
};
