import { connectToDB } from "@/lib/utils/mongo_connection";
import { NextRequest, NextResponse } from "next/server";
import { v4 as uuid } from "uuid";

export async function GET(req: NextRequest) {
  const shuffleArray = (array: any) => {
    return array.sort(() => Math.random() - 0.5);
  };

  try {
    const images = [
      { path: "/images/uploads/11.png", id: uuid(), tag: "art" },
      { path: "/images/uploads/66.jpg", id: uuid(), tag: "art" },
      { path: "/images/uploads/22.png", id: uuid(), tag: "art" },
      { path: "/images/uploads/44.png", id: uuid(), tag: "art" },
      { path: "/images/uploads/33.png", id: uuid(), tag: "art" },
      { path: "/images/uploads/animal1.jpg", id: uuid(), tag: "animal" },
      { path: "/images/uploads/animal2.jpg", id: uuid(), tag: "animal" },
      { path: "/images/uploads/animal3.jpg", id: uuid(), tag: "animal" },
      { path: "/images/uploads/animal4.jpg", id: uuid(), tag: "animal" },
      { path: "/images/uploads/mountain1.jpg", id: uuid(), tag: "mountain" },
      { path: "/images/uploads/mountain2.jpg", id: uuid(), tag: "mountain" },
      { path: "/images/uploads/lifestyle.jpg", id: uuid(), tag: "lifestyle" },
    ];

    return NextResponse.json(shuffleArray(images));
  } catch (e) {
    console.log(e);
    throw new Error("An error occurred");
  }
}
