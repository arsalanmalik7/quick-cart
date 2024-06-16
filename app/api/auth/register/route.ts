import { PrismaClient } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next"
import { NextResponse } from "next/server";
import { NextRequest } from "next/server";
// const prisma = new PrismaClient();

export async function POST(req: NextApiRequest, res: NextApiResponse) {
    const { firstName, lastName, email, password } = req.body;
    
    console.log("req.body: ", req.body.firstName);
 
    console.log(firstName, lastName, email, password);

    const method = req.method;

    if (method === 'POST') {
        if (!firstName || !lastName || !email || !password) {

            // return res.status(400).send({ message: 'Missing required fields' });
            return new NextResponse(
                JSON.stringify({ message: 'Missing required fields' }),
                { status: 400 }
            );
        }

        // const user = await prisma.user.create({
        //     data: {
        //         name: `${firstName} ${lastName}`,
        //         email: email,
        //     },
        // });
        // console.log(user);
        // res.json(user);
    } else {

        res.status(405).json({ message: 'Method not allowed' });
    }
};

