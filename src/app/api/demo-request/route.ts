import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { email, company, details } = body;

    const demoReq = await prisma.demoRequest.create({
      data: {
        email,
        company,
        details,
      },
    });

    return NextResponse.json({ success: true, demoReq });
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
