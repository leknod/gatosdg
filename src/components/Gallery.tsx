export default function Gallery() {
  const leftColumnImages = [
    {
      src: "/blacky_sleeping.png",
      alt: "Blacky durmiendo",
      aspect: "aspect-[4/3]",
    },
    {
      src: "/blacky_window.png",
      alt: "Blacky mirando por la ventana",
      aspect: "aspect-[2/3]",
    },
    {
      src: "/blacky_paw.png",
      alt: "Pata de Blacky",
      aspect: "aspect-[2/3]",
    },
  ];

  const rightColumnImages = [
    {
      src: "/blacky_playing.png",
      alt: "Blacky jugando",
      aspect: "aspect-[4/3]",
    },
    {
      src: "/blacky_close_up.png",
      alt: "Primer plano de Blacky",
      aspect: "aspect-[2/3]",
    },
    {
      src: "/blacky-main.jpg",
      alt: "Blacky estirándose",
      aspect: "aspect-[4/3]",
    },
  ];

  return (
    <section className="w-full max-w-md px-4 pt-6 pb-12 flex flex-col gap-5">
      {/* Gallery Header */}
      <div className="flex justify-between items-baseline">
        <h2 className="text-white text-xl font-bold tracking-wide font-sans">
          Photo Gallery
        </h2>
        <span className="text-[#dfaa5b] text-xs font-semibold tracking-wide">
          24 photos
        </span>
      </div>

      {/* Masonry Grid Layout */}
      <div className="grid grid-cols-2 gap-2">
        {/* Left Column */}
        <div className="flex flex-col gap-2">
          {leftColumnImages.map((img, idx) => (
            <div
              key={`left-img-${idx}`}
              className={`w-full ${img.aspect} overflow-hidden rounded-lg border border-[#26211a] bg-[#171511] relative group cursor-pointer shadow-lg`}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>

        {/* Right Column */}
        <div className="flex flex-col gap-2">
          {rightColumnImages.map((img, idx) => (
            <div
              key={`right-img-${idx}`}
              className={`w-full ${img.aspect} overflow-hidden rounded-lg border border-[#26211a] bg-[#171511] relative group cursor-pointer shadow-lg`}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
