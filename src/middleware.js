import { NextResponse } from 'next/server';
import Cookies from 'js-cookie';

const publicRoutes = [
  "/",
  "/admin/login"
];

export function middleware(request) {
  const url = request.nextUrl.clone();
  const isPublicRoute = publicRoutes.some(route => url.pathname.startsWith(route));

  if (isPublicRoute) {
    return NextResponse.next();
  }

  const token = request.cookies.get('token');
  const user = request.cookies.get('user');

  console.log("token ", token);
  console.log("user", user);

  if (!token || !user) {
    url.pathname = "/login";
    return NextResponse.redirect(url);
  }

  let userRole = null;
  try {
    userRole = JSON.parse(user).role;
  } catch (error) {
    console.error('Error parsing user data', error);
    url.pathname = "/login";
    return NextResponse.redirect(url);
  }

  const protectedRoutes = {
    "/admin/": "ADMIN",
    "/developer/": "DEVELOPER",
    "/maintainer/": "MAINTAINER"
  };

  const pathname = url.pathname;

  for (const [routePrefix, requiredRole] of Object.entries(protectedRoutes)) {
    if (pathname.startsWith(routePrefix)) {
      if (userRole !== requiredRole) {
        url.pathname = "/login";
        return NextResponse.redirect(url);
      }
      break;
    }
  }

  return NextResponse.next();
}
