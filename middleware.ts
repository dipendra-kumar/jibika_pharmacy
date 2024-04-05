import { NextRequest, NextResponse } from "next/server";
import { updateSession } from "./lib/lib";

export async function middleware(request: NextRequest) {
  const exceptionRoutes = ["/admin/login", "/admin/register"];
  const isLoginOrRegisterRoute = exceptionRoutes.includes(
    request.nextUrl.pathname,
  );
  if (isLoginOrRegisterRoute) {
    return NextResponse.next();
  }

  return await updateSession(request);
}
export const config = {
  matcher: ["/((?!api|_next/static|_next/image|.*\\.png$).*)", "/admin"],
};
