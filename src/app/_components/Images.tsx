import Image from "next/image";
import Link from "next/link";

import { fetchMyImages } from "~/server/queries";

export async function Images() {
  const images = await fetchMyImages();

  return (
    <div className="flex flex-wrap justify-center">
      {images.map((image, index) => (
        <div key={index} className="h-48 w-48 p-2">
          <Link href={`/img/${image.id}`}>
            <Image
              src={image.url}
              alt={image.name}
              style={{ objectFit: "cover", width: "100%", height: "100%" }}
              width={500}
              height={500}
            />
          </Link>
          <h5>{image.name}</h5>
        </div>
      ))}
    </div>
  );
}
