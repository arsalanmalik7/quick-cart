import { NextResponse } from "next/server";
import { NextRequest } from "next/server";
import { PrismaClient } from "@prisma/client";


const prisma = new PrismaClient();


export async function GET() {



    const users = await prisma.user.findMany();
    return NextResponse.json(users);
}

export async function DELETE(request: NextRequest) {
    console.log("delete");

    const { searchParams } = request.nextUrl;
    const id: any = searchParams.get('id');

    console.log("delete userId: ",searchParams);
    // const deletedUser = await prisma.user.delete({
    //     where: {
    //         id: id
    //     }
    // });

    // return NextResponse.json(deletedUser);

}