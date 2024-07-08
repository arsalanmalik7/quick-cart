import { NextResponse } from "next/server";
import { NextRequest } from "next/server";
import { PrismaClient } from "@prisma/client";


const prisma = new PrismaClient();


export async function GET() {



    const users = await prisma.users.findMany();
    return NextResponse.json(users);
}

export async function DELETE(request: NextRequest) {
    console.log("delete");

    const { searchParams } = request.nextUrl;
    const id: any = searchParams.get('id');

    console.log("delete userId: ",searchParams);
    // const deletedUser = await prisma.users.delete({
    //     where: {
    //         id: id
    //     }
    // });

    // return NextResponse.json(deletedUser);

}