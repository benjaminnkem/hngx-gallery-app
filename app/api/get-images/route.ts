import { connectToDB } from "@/lib/utils/mongo_connection";
import { NextRequest, NextResponse } from "next/server";
import { v4 as uuid } from "uuid";

export async function GET(req: NextRequest) {
  try {
    const images = [
      { path: "/images/uploads/11.png", id: uuid(), tag: "art" },
      { path: "/images/uploads/66.jpg", id: uuid(), tag: "art" },
      { path: "/images/uploads/22.png", id: uuid(), tag: "art" },
      { path: "/images/uploads/44.png", id: uuid(), tag: "art" },
      { path: "/images/uploads/33.png", id: uuid(), tag: "art" },
    ];

    return NextResponse.json(images);
  } catch (e) {
    console.log(e);
    throw new Error("An error occurred");
  }
}
