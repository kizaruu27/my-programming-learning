import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  const isLogin = false;

  if (isLogin) return NextResponse?.next();
  else return NextResponse?.redirect(new URL("/auth/login", req.url));
  // return NextResponse.next();
}

// merupakan object yg berguna untuk menentukan suatu middleware mau dieksekusi di mana
export const config = {
  matcher: ["/product", "/product/server"],
};
