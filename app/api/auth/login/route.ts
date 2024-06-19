import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";
import bcrypt from "bcrypt"

const prisma = new PrismaClient();

export async function POST(request: Request) {


    const body = await request.json();
    console.log("body: ", body);

    const {
        email,
        password,
    } = body;

    const method = request.method;

    if (method === 'POST') {

        if (!email || !password) {

            return new NextResponse(
                JSON.stringify({ message: 'Missing required fields' }),
                { status: 400 }
            );
        }
        try {

            const checkingUser = await prisma.user.findUnique({
                where: {
                    email: email,
                },
            });
            if (!checkingUser) {
                return new NextResponse(
                    JSON.stringify({ message: 'User does not exists. Please Signup first.' }),
                    { status: 400 }
                );
            }

            const isPasswordValid = await bcrypt.compare(password, checkingUser.password);

            if (!isPasswordValid) {
                return new NextResponse(
                    JSON.stringify({ message: 'User does not exists. Please Signup first.' }),
                    { status: 400 }
                );
            }

            return new NextResponse(
                JSON.stringify({ message: 'Login successful' }),
                { status: 200 }
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