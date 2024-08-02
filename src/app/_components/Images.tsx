import { fetchMyImages } from "~/server/queries";

export async function Images() {
  const images = await fetchMyImages();

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
