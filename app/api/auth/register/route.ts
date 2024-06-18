import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";
// import bcrypt from "bcrypt"

const prisma = new PrismaClient();

export async function POST(request: Request) {


    const response = await request.json();
    console.log("response: ", response);

    const {
        firstName,
        lastName,
        email,
        password,
    } = response;

    const method = request.method;

    if (method === 'POST') {
        if (!firstName || !lastName || !email || !password) {

            return new NextResponse(
                JSON.stringify({ message: 'Missing required fields' }),
                { status: 400 }
            );
        }

        // const checkingUser = await prisma.user.findUnique({
        //     where: {
        //         email: email,
        //     },
        // });
        // if (checkingUser) {
        //     return new NextResponse(
        //         JSON.stringify({ message: 'User already exists' }),
        //         { status: 400 }
        //     );
        // }

        // const hashedPassword = await bcrypt.hash(password, 10);


        try {

            const user = await prisma.user.create({
                data: {
                    firstName: firstName,
                    lastName: lastName,
                    email: email,
                    password: password,

                },
            });
            console.log(user);

        } catch (error) {
            console.log(error);
            return new NextResponse(
                JSON.stringify({ message: 'Something went wrong' }),
                { status: 500 }
            );
        }






    } else {
        return new NextResponse(
            JSON.stringify({ message: 'Method not allowed' }),
            { status: 405 }
        );
    }

}