// pages/api/users/[id].ts
import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();


export  async function DELETE(request: NextRequest) {

    const url = request.nextUrl.clone();

    const  segment  = url.pathname;

    const id = segment.slice(11);
    console.log("id: ", id);

    if (request.method === 'DELETE') {



        try {
            // Convert `id` to a number if necessary
            const userId = Number(id);

            // Perform deletion using Prisma
            const deletedUser = await prisma.user.delete({
                where: {
                    id: userId,
                },
            });

            // Respond with deleted user data
            return NextResponse.json(deletedUser, { status: 200 });
        } catch (error) {
            console.error('Error deleting user:', error);
            return NextResponse.json({ error: 'Failed to delete user' }, { status: 500 });
        }
    }

    return NextResponse.json({ error: 'Method not allowed' }, { status: 405 });
}
