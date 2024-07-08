import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import jwt from "jsonwebtoken";

export function middleware(request: NextRequest) {
  const response = NextResponse.next();

  console.log('Middleware is running');  // Debugging log

  const url = request.nextUrl.clone();

  // Example: Redirect if not authenticated for admin frontend routes
  const token: any = request.cookies.get('authToken');
  console.log(token);


  if (url.pathname.startsWith('/admin')) {
    if (!token) {
      url.pathname = '/account/login';
      return NextResponse.redirect(url);
    }
  }

  const decodedToken: any = jwt.decode(token?.value);
  
  console.log(decodedToken);
  // if (decodedToken?.isAdmin !== true) {
  //   url.pathname = '/';
  //   return NextResponse.redirect(url);
  // }
  // const verifyToken = jwt.verify(token?.value, process.env.JWT_SECRET!);
  // console.log(verifyToken);


  if (!decodedToken) {
    url.pathname = '/account/login';
    return NextResponse.redirect(url);
  }

  // const checkingisAdmin = token?.value.isAdmin;
  // console.log(checkingisAdmin);

  // if (url.pathname.startsWith('/admin') && !checkingisAdmin) {
  //   url.pathname = '/';
  //   return NextResponse.redirect(url);
  // }

  return response;
}

export const config = {
  matcher: ['/admin/:path*', '/api/users', '/account'],
};
