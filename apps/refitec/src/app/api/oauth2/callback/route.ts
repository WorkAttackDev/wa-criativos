import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const code = searchParams.get('code');

  const clientId = process.env.EMAIL_OAUTH_CLIENT_ID;
  const clientSecret = process.env.EMAIL_OAUTH_CLIENT_SECRET;
  const tenantId = process.env.EMAIL_OAUTH_TENANT_ID;

  if (!code) {
    const authUrl = `https://login.microsoftonline.com/${tenantId}/oauth2/v2.0/authorize?` +
      `client_id=${clientId}&` +
      `response_type=code&` +
      `redirect_uri=${encodeURIComponent('https://www.refitec.co.ao/api/oauth2/callback')}&` +
      `response_mode=query&` +
      `scope=${encodeURIComponent('https://outlook.office365.com/SMTP.Send offline_access')}`;

    return NextResponse.redirect(authUrl);
  }

  try {
    const tokenResponse = await fetch(
      `https://login.microsoftonline.com/${tenantId}/oauth2/v2.0/token`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams({
          client_id: clientId!,
          client_secret: clientSecret!,
          code: code,
          redirect_uri: 'https://www.refitec.co.ao/api/oauth2/callback',
          grant_type: 'authorization_code',
        }),
      }
    );

    const tokens = await tokenResponse.json();

    return NextResponse.json({
      message: 'Tokens received',
      refresh_token: tokens.refresh_token,
      access_token: tokens.access_token,
      expires_in: tokens.expires_in,
    });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to get tokens', details: error }, { status: 500 });
  }
}