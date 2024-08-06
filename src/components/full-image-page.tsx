import Image from "next/image";

import { fetchImage } from "~/server/queries";

export default async function FullPageImageView(props: { id: number }) {
  const image = await fetchImage(props.id);

  return (
    <div className="flex h-full w-full bg-green-900">
      <div className="flex justify-center">
        <Image
          src={image.url}
          alt={image.name}
          style={{ objectFit: "contain" }}
          width={500}
          height={500}
        />
      </div>
      <div className="flex flex-col">
        <div className="text-xl font-bold">{image.name}</div>
      </div>
    </div>
  );
}
