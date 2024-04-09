import { logout } from "@/lib/lib";
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
    await logout();
    const loginUrl = new URL("/admin/login", req.nextUrl.origin);
    return NextResponse.redirect(loginUrl.toString());
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
