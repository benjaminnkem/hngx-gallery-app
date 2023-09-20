import Users from "@/lib/schemas/Users";
import { connectToDB } from "@/lib/utils/mongo_connection";
import { NextRequest, NextResponse } from "next/server";
import { hashSync } from "bcryptjs";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    await connectToDB();

    const { email, password } = body;
    const userExists = await Users.findOne({ email });
    if (userExists) return new NextResponse("exists", { status: 409, statusText: "exists" });

    const hashedPassword = hashSync(password, 12);

    await Users.create({ email, password: hashedPassword });

    return new NextResponse("User created successfully");
  } catch (e) {
    console.log(e);
    throw new Error("An error occurred");
  }
}
