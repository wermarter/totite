const mockUrls = [
  "https://study-public.s3.ap-southeast-1.amazonaws.com/Screenshot+2023-08-14+162933.png",
  "https://study-public.s3.ap-southeast-1.amazonaws.com/Screenshot+2023-08-14+162933.png",
  "https://study-public.s3.ap-southeast-1.amazonaws.com/Screenshot+2023-07-14+112610.png",
  "https://study-public.s3.ap-southeast-1.amazonaws.com/Screenshot+2023-07-19+140953.png",
];

const mockImages = mockUrls.map((url, index) => ({
  id: index + 1,
  url,
}));

export default function HomePage() {
  return (
    <main>
      <div className="flex flex-wrap">
        {[...mockImages, ...mockImages, ...mockImages].map((image) => (
          <div key={image.id} className="w-1/2 p-2">
            <img src={image.url} alt={`Image ${image.id}`} />
          </div>
        ))}
      </div>
    </main>
  );
}
