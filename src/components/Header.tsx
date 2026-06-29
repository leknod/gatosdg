import { supabase } from "@/lib/supabase";
import { getCoverPhoto } from "@/lib/getPhotos";
import HeaderClient from "./HeaderClient";

export default async function Header() {
  const { data: cats } = await supabase.from("cats").select("name, slug").order("sort_order", { ascending: true });

  const catsWithCovers = await Promise.all(
    (cats ?? []).map(async (cat: { name: string; slug: string }) => {
      const cover = await getCoverPhoto(cat.slug);
      return { ...cat, coverUrl: cover?.thumbUrl ?? null };
    }),
  );

  return <HeaderClient cats={catsWithCovers} />;
}
