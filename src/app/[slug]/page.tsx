import { MapPin, Cake } from "lucide-react";
import Gallery from "@/components/Gallery";
import { supabase } from "@/lib/supabase";
import { notFound } from "next/navigation";

function calcAge(birthdate: string) {
  const birth = new Date(birthdate);
  const now = new Date();
  const years = now.getFullYear() - birth.getFullYear();
  const months = now.getMonth() - birth.getMonth();
  if (years === 0) return `${months} meses`;
  return `${years} años`;
}

export async function generateStaticParams() {
  const { data: cats } = await supabase.from("cats").select("slug");
  return cats?.map((cat: { slug: string }) => ({ slug: cat.slug })) ?? [];
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const { data: cat, error } = await supabase
    .from("cats")
    .select("*, nicknames(nickname)")
    .eq("slug", slug)
    .single();

  console.log("slug buscado:", slug);
  console.log("cat:", cat);
  console.log("error:", error);

  if (!cat || error) notFound();
  return (
    <main className="min-h-[calc(100vh-57px)] bg-[#0c0a08] flex flex-col items-center">
      {/* Mobile container - width limited to mobile screens (max-w-md) */}
      <div className="w-full max-w-md flex flex-col pb-12">
        {/* Image Container */}
        <div className="relative w-full aspect-[4/5] overflow-hidden">
          <img
            src="/blacky-main.jpg"
            alt="Blacky"
            className="w-full h-full object-cover"
          />
          {/* Bottom vignette gradient to blend the image into the page background */}
          <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-[#0c0a08] to-transparent" />
        </div>

        {/* Info Card Container */}
        <div className="relative -mt-16 mx-4 z-10">
          <div className="bg-[#171511] border border-[#26211a] rounded-[32px] p-6 shadow-2xl flex flex-col gap-4">
            {/* Title & Tags */}
            <div className="flex flex-col gap-2.5">
              <h1 className="text-white text-3xl font-bold tracking-tight">
                {cat.name}
              </h1>
              {cat.nicknames && cat.nicknames.length > 0 && (
                <div className="flex flex-wrap gap-2">
                  {cat.nicknames.map((n: { nickname: string }) => (
                    <span
                      key={n.nickname}
                      className="bg-[#282115] text-[#dfaa5b] text-[10px] font-extrabold tracking-wider px-3.5 py-1 rounded-full uppercase select-none"
                    >
                      {n.nickname}
                    </span>
                  ))}
                </div>
              )}
            </div>

            {/* Age */}
            <div className="flex items-center gap-2 text-[#a59b8d] text-sm mt-2">
              <Cake className="w-4 h-4 text-[#dfaa5b]" />
              <span>{calcAge(cat.birthdate)}</span>
            </div>
            {/* Location */}
            <div className="flex items-center gap-2 text-[#a59b8d] text-sm">
              <MapPin className="w-4 h-4 text-[#dfaa5b]" />
              <span>{cat.location}</span>
            </div>

            {/* Description */}
            <p className="text-[#d6cebf] text-[15px] leading-relaxed font-normal mt-2">
              {cat.description}
            </p>
          </div>
        </div>

        {/* Photo Gallery Section */}
        <Gallery />
      </div>
    </main>
  );
}
