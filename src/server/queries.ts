import "server-only";

import { db } from "./db";
import { auth } from "@clerk/nextjs/server";

export async function fetchMyImages() {
  const { userId } = auth();
  if (userId === null) throw new Error("Unauthorized");

  return db.query.images.findMany({
    where: (images, { eq }) => eq(images.userId, userId),
    orderBy: (images, { desc }) => [desc(images.id)],
  });
}

export async function fetchImage(id: number) {
  const { userId } = auth();
  if (userId === null) throw new Error("Unauthorized");

  const image = await db.query.images.findFirst({
    where: (images, { eq, and }) =>
      and(eq(images.userId, userId), eq(images.id, id)),
  });
  if (!image) throw new Error("Image not found");

  return image;
}
