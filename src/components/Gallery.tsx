type Photo = {
  key: string;
  url: string;
};

export default function Gallery({ photos }: { photos: Photo[] }) {
  const leftColumnImages = photos.filter((_, i) => i % 2 === 0);

  const rightColumnImages = photos.filter((_, i) => i % 2 === 1);

  return (
    <section className="w-full max-w-md px-4 pt-6 pb-12 flex flex-col gap-5">
      <div className="flex justify-between items-baseline">
        <h2 className="text-white text-xl font-bold tracking-wide">Galería</h2>

        <span className="text-[#dfaa5b] text-xs font-semibold tracking-wide">
          {photos.length} fotos
        </span>
      </div>

      <div className="grid grid-cols-2 gap-2">
        <div className="flex flex-col gap-2">
          {leftColumnImages.map((photo) => (
            <img
              key={photo.key}
              src={photo.url}
              alt=""
              className="w-full rounded-lg"
            />
          ))}
        </div>

        <div className="flex flex-col gap-2">
          {rightColumnImages.map((photo) => (
            <img
              key={photo.key}
              src={photo.url}
              alt=""
              className="w-full rounded-lg"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
