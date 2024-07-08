import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";
import bcrypt from 'bcrypt'


const prisma = new PrismaClient();

export async function POST(request: Request) {
    

    const body = await request.json();
    console.log("body: ", body);

    const {
        firstName,
        lastName,
        email,
        password,
    } = body;

    const method = request.method;

    if (method === 'POST') {
        if (!firstName || !lastName || !email || !password) {

            return new NextResponse(
                JSON.stringify({ message: 'Missing required fields' }),
                { status: 400 }
            );
        }

        const checkingUser = await prisma.users.findUnique({
            where: {
                email: email,
            },
        });
        if (checkingUser) {
            return new NextResponse(
                JSON.stringify({ message: 'User already exists' }),
                { status: 400 }
            );
        }

        const hashedPassword = await bcrypt.hash(password, 10);


        try {

            const user = await prisma.users.create({
                data: {
                    firstName: firstName,
                    lastName: lastName,
                    email: email,
                    password: hashedPassword,
                    isAdmin: false,

                },
            });
            console.log("user: ",user);
            return new NextResponse(
                JSON.stringify({ message: 'User created successfully' }),
                { status: 201 }
            );

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