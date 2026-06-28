type Photo = {
  key: string;
  url: string;
  thumbUrl: string;
};

export default function Gallery({ photos }: { photos: Photo[] }) {
  const leftColumnImages = photos.filter((_, i) => i % 2 === 0);

  const rightColumnImages = photos.filter((_, i) => i % 2 === 1);

  return (
    <section className="w-full lg:max-w-none px-4 lg:px-0 pt-6 lg:pt-0 pb-12 lg:pb-0 flex flex-col gap-5">
      <div className="flex justify-between items-baseline">
        <h2 className="text-white text-xl font-bold tracking-wide">Galería</h2>

        <span className="text-primary text-xs font-semibold tracking-wide">
          {photos.length} fotos
        </span>
      </div>

      <div className="grid grid-cols-2 gap-2">
        <div className="flex flex-col gap-2">
          {leftColumnImages.map((photo) => (
            <img
              key={photo.key}
              src={photo.thumbUrl}
              alt=""
              className="w-full rounded-lg"
            />
          ))}
        </div>

        <div className="flex flex-col gap-2">
          {rightColumnImages.map((photo) => (
            <img
              key={photo.key}
              src={photo.thumbUrl}
              alt=""
              className="w-full rounded-lg"
            />
          ))}
        </div>
      </div>
    </section>
  );
}

