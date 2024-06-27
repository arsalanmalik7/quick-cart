import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { cookies } from "next/headers";

export async function GET(request: NextRequest) {

    const cookiesStore = cookies();
    cookiesStore.delete('authToken');

    return new NextResponse(JSON.stringify({ message: 'Logout successful' }), {
        status: 200,
        headers: {
            'Content-Type': 'application/json',
        },
    });


}