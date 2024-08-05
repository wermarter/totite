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
