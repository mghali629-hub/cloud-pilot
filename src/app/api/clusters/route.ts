import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function GET() {
  try {
    const clusters = await prisma.cluster.findMany();
    return NextResponse.json({ success: true, clusters });
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, provider, region, nodes } = body;
    const cluster = await prisma.cluster.create({
      data: {
        name,
        provider: provider || 'AWS EKS',
        region: region || 'us-east-1',
        nodes: Number(nodes) || 8,
        cpuUsage: 12.5,
        memUsage: 24.0,
        status: 'HEALTHY',
      },
    });
    return NextResponse.json({ success: true, cluster });
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
