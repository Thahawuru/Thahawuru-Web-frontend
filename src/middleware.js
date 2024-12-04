import { NextResponse } from 'next/server';
import Cookies from 'js-cookie';

const publicRoutes = [
    "/",
    "/admin/login",
    "/payment-success"
];

export function middleware(request) {
    const url = request.nextUrl.clone();

    if (url.pathname.startsWith('/_next') || url.pathname === '/favicon.ico') {
        return NextResponse.next();
    }

    const isPublicRoute = publicRoutes.some(route => url.pathname === route || url.pathname.startsWith(`${route}/`));

    if (isPublicRoute) {
        return NextResponse.next();
    }
    const user = request.cookies.get('user')?.value;

    if (!user) {
        url.pathname = "/";
        return NextResponse.redirect(url);
    }

    let userRole = null;
    try {
        userRole = JSON.parse(user).role;
    } catch (error) {
        console.error('Error parsing user data', error);
        url.pathname = "/";
        return NextResponse.redirect(url);
    }

    const protectedRoutes = {
        "/admin/": "ADMIN",
        "/developer/": "APIUSER",
        "/maintainer/": "MAINTAINER"
    };

    const pathname = url.pathname;

    for (const [routePrefix, requiredRole] of Object.entries(protectedRoutes)) {
        if (pathname.startsWith(routePrefix)) {
            if (userRole !== requiredRole) {
                url.pathname = "/";
                return NextResponse.redirect(url);
            }
            break;
        }
    }

    return NextResponse.next();
}
