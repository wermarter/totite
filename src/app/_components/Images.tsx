import { auth } from "@clerk/nextjs/server";
import { db } from "~/server/db";

export async function Images() {
  const { userId } = auth();
  const images = await db.query.images.findMany({
    where: (images, { eq }) => eq(images.userId, userId!),
    orderBy: (images, { desc }) => [desc(images.id)],
  });

  return (
    <div className="flex flex-wrap">
      {images.map((image, index) => (
        <div key={index} className="h-1/3 w-1/3 p-2">
          <img src={image.url} alt={`Image ${image.id}`} />
          <h5>{image.name}</h5>
        </div>
      ))}
    </div>
  );
}
