"use server";

import { generateJwtToken } from "@/helpers";
import { getSession } from "@/lib/lib";
import userModel, { IUser } from "@/models/user";
import connectMongo from "@/utils/connect-mongo";
import bcrypt from "bcrypt";

interface LoginFormInput {
  emailAddress: string;
  password: string;
}

interface RegisterFormInput {
  fullName: string;
  emailAddress: string;
  password: string;
  address: string;
  phoneNumber: string;
}
export async function checkLogin() {
  return await getSession();
}

export async function registerAdmin(data: RegisterFormInput) {
  const { fullName, emailAddress, password, address, phoneNumber } = data;
  try {
    await connectMongo();

    // Check if user with the same email already exists
    const existingUser = await userModel.findOne({
      emailAddress: data.emailAddress,
    });
    if (existingUser) {
      throw new Error("User with this email already exists");
    }

    // Save the user to the database
    const user = await userModel.create({
      fullName,
      emailAddress,
      password,
      address,
      phoneNumber,
      isAdmin: true,
    });

    const token = generateJwtToken({ userId: user._id }, "yourSecretKey", 60);

    return token; // Return JWT token
  } catch (error) {
    console.error("Error registering user:", error);
    throw error;
  }
}
