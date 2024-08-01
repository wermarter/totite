import { auth } from "@clerk/nextjs/server";
import { db } from "~/server/db";
import { images } from "~/server/db/schema";

export async function POST(request: Request) {
  const { userId } = auth();
  const { filename } = await request.json();

  await db.insert(images).values({
    name: filename,
    url: `https://study-public.s3.ap-southeast-1.amazonaws.com/${(filename as string).replaceAll(" ", "+")}`,
    userId: userId!,
  });

  return new Response();
}
