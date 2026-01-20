'use server';

import { cookies } from 'next/headers';

const ACCESS_CODE = process.env.SITE_ACCESS_CODE || '2026';

export async function verifyAccessCode(code: string) {
    if (code === ACCESS_CODE) {
        const cookieStore = await cookies();

        // Set cookie for 7 days
        cookieStore.set('site-access-granted', 'true', {
            maxAge: 60 * 60 * 24 * 7,
            path: '/',
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'lax',
        });

        return { success: true };
    }

    return { success: false, error: 'Código incorrecto' };
}
