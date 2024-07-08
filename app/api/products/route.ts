import { NextResponse } from "next/server";
import { NextRequest } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function POST(request: NextRequest) {
    const body = await request.json();
    try {
        
        const { productName } = body;
    
        const newProduct = await prisma.products.create({
            data: {
                productName
            },
        });
        return NextResponse.json(newProduct);
    } catch (error) {
        return NextResponse.json(error);
        
    }



};

export async function GET() {
    try {
        
        const products = await prisma.products.findMany();
        return NextResponse.json(products);

    } catch (error) {
        return NextResponse.json(error);
        
    }
}