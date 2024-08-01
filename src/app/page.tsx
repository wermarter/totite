import { db } from "~/server/db";

// export const dynamic = "force-dynamic";

export default async function HomePage() {
  const images = await db.query.images.findMany({
    orderBy: (images, { desc }) => [desc(images.id)],
  });

  return (
    <main>
      <div className="flex flex-wrap">
        {images.map((image, index) => (
          <div key={index} className="h-1/3 w-1/3 p-2">
            <img src={image.url} alt={`Image ${image.id}`} />
            <h5>{image.name}</h5>
          </div>
        ))}
      </div>
    </main>
  );
}
