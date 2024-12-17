import { getToken } from "next-auth/jwt";
import { getURL } from "next/dist/shared/lib/utils";
import { NextFetchEvent, NextMiddleware, NextRequest, NextResponse } from "next/server";

export default function withAuth(middleware: NextMiddleware, requireAuth: string[] = []) {
  return async (req: NextRequest, next: NextFetchEvent) => {
    const pathname = req.nextUrl.pathname;
    if (requireAuth.includes(pathname)) {
      const token = await getToken({
        req,
        secret: process.env.AUTH_SECRET,
      });

      if (!token) {
        const url = new URL("/", req.url);
        return NextResponse.redirect(url);
      }
    }

    return middleware(req, next);
  };
}
