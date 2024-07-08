import { NextResponse } from "next/server";
import { NextRequest } from "next/server";
import { PrismaClient } from "@prisma/client";
import { redirect } from "next/navigation";
import { cookies } from "next/headers";
import jwt from 'jsonwebtoken';

const prisma = new PrismaClient();

export async function GET(request: NextRequest) {

    const method = request.method;
    const url = request.nextUrl.clone();

    const authToken: any = cookies().get('authToken')?.value;
    console.log("getting token on profile: ", authToken);
    const decodedToken: any = jwt.decode(authToken);
    console.log("decoded token: ", decodedToken);
    const userId = decodedToken?.id;


    // if (!authToken) {
    //     const url = request.nextUrl.clone();
    //     url.pathname = '/';
    //     return NextResponse.redirect(url);
    // }

    if (!authToken) {
        return NextResponse.json({ meassage: "session expired please login again" }, { status: 401 });

    };



    if (!userId) {
        return NextResponse.json({ message: 'User not found' });
    };

    if (method === 'GET') {
        try {

            const user = await prisma.users.findUnique({
                where: {
                    id: userId,
                },
            });

            return NextResponse.json(user);


        } catch (error) {

            return NextResponse.json({ error });
        }



    } else {
        return NextResponse.json({ message: 'Method not allowed' });
    }

};