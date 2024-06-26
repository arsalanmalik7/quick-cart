import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import { redirect } from "next/navigation";
import { cookies } from "next/headers";
import jwt from 'jsonwebtoken';

const prisma = new PrismaClient();

export async function GET(request : Request) {

    const method = request.method;

    // const token = request.cookies.get('authToken')?.value;
    const authToken: any = cookies().get('authToken')?.value;
    console.log("getting token on profile: ",authToken);
    const decodedToken: any = jwt.decode(authToken);
    console.log("decoded token: ", decodedToken);
    const userId = decodedToken?.id;


    if (method === 'GET') {
        try {

            const user = await prisma.user.findUnique({
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