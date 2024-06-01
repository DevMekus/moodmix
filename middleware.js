"server only";
import { NextResponse } from "next/server";
import { decrypt } from "@/lib/sessions";
import { cookies } from "next/headers";

// 1. Specify protected and public routes
const protectedRoutes = ["/dashboard", "/admin"];
const publicRoutes = ["/Oauth/login", "/Oauth/signup"];

export default async function middleware(req) {
  /**test Path */
  const path = req.nextUrl.pathname;
  const isProtectedRoute = protectedRoutes.includes(path);
  const isPublicRoute = publicRoutes.includes(path);

  /**Decypt session */
  const cookie = cookies().get("session")?.value;
  const session = await decrypt(cookie);

  /**Redirect */
  if (isProtectedRoute && !session?.userid) {
    return NextResponse.redirect(
      new URL("/Oauth/login?auth=false", req.nextUrl)
    );
  }

  if (
    isPublicRoute &&
    session?.userid &&
    !req.nextUrl.pathname.startsWith("/dashboard", req.nextUrl)
  ) {
    return NextResponse.redirect(new URL("/dashboard", req.nextUrl));
  }

  return NextResponse.next();
}

// Routes Middleware should not run on
export const config = {
  matcher: ["/((?!api|_next/static|_next/image|.*\\.png$).*)"],
};
