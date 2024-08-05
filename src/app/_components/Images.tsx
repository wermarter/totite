import Image from "next/image";

import { fetchMyImages } from "~/server/queries";

export async function Images() {
  const images = await fetchMyImages();

  return (
    <div className="flex flex-wrap justify-center">
      {images.map((image, index) => (
        <div key={index} className="h-60 w-60 p-2">
          <Image
            src={image.url}
            alt={image.name}
            style={{ objectFit: "contain", width: "100%", height: "100%" }}
            width={300}
            height={300}
          />
          <h5>{image.name}</h5>
        </div>
      ))}
    </div>
  );
}
