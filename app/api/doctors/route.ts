import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
  } catch (error) {}
}

export async function GET(request: Request) {
  return NextResponse.json(
    {
      message: "Hello doctors",
    },
    {
      status: 200,
    }
  );
}
