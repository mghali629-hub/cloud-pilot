import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json({
    user: {
      id: 'usr_cp_k8s_901',
      name: 'Alex Rivera',
      email: 'alex.rivera@devops.io',
      role: 'DEVOPS_LEAD',
      org: 'Acme Cloud Corp',
    },
    expires: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString(),
  });
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    return NextResponse.json({
      success: true,
      token: 'cp_jwt_token_k8s_77192',
      user: {
        id: 'usr_cp_k8s_901',
        email: body.email || 'devops@cloudpilot.io',
        role: 'ADMIN',
      },
    });
  } catch {
    return NextResponse.json({ error: 'Invalid payload' }, { status: 400 });
  }
}
