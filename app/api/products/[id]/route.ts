import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();


export  async function DELETE(request: NextRequest) {

    const url = request.nextUrl.clone();

    const  segment  = url.pathname;

    const id = segment.slice(14);
    console.log("id: ", id);

    if (request.method === 'DELETE') {



        try {
            // Convert `id` to a number if necessary
            const productId = Number(id);

            // Perform deletion using Prisma
            const deletedProduct = await prisma.products.delete({
                where: {
                    id: productId,
                },
            });

            // Respond with deleted user data
            return NextResponse.json(deletedProduct, { status: 200 });
        } catch (error) {
            console.error('Error deleting product:', error);
            return NextResponse.json({ error: 'Failed to delete product' }, { status: 500 });
        };
    };

    return NextResponse.json({ error: 'Method not allowed' }, { status: 405 });
}
