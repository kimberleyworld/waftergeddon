'use server';

import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

export async function authenticateUser(
  prevState: { error: string } | null,
  formData: FormData
) {
  const password = formData.get('password') as string;
  
  if (!password) {
    return { error: 'Password is required' };
  }

  const correctPassword = process.env.SITE_PASSWORD;
  
  if (!correctPassword) {
    console.error('SITE_PASSWORD environment variable not set');
    return { error: 'Server configuration error' };
  }

  if (password === correctPassword) {
    // Set authentication cookie
    const cookieStore = await cookies();
    cookieStore.set('authenticated', 'true', {
      path: '/',
      maxAge: 86400, // 24 hours
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict'
    });
    
    // Redirect to home page
    redirect('/');
  } else {
    return { error: 'Incorrect password. Try again!' };
  }
}