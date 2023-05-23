import { NextRequest, NextResponse } from 'next/server';

const PUBLIC_FILE = /\.(.*)$/;

export async function middleware(req) {
    if (
        req.nextUrl.pathname.startsWith('/_next') ||
        req.nextUrl.pathname.includes('/api/') ||
        PUBLIC_FILE.test(req.nextUrl.pathname)
    ) {
        return NextResponse.next();
    }

    // if (req.nextUrl.locale === 'default') {
        const locale = req.cookies.get('NEXT_LOCALE').value || 'ru';

        return NextResponse.redirect(
          new URL(
            `/${locale}${req.nextUrl.pathname}${req.nextUrl.search}`,
            req.url
          )
        );
    // }

    // if (req.nextUrl === '/') {
        
    //     return NextResponse.rewrite('/ru');
    // }


    // return NextResponse.next();
    
}