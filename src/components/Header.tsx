import { supabase } from "@/lib/supabase";
import HeaderClient from "./HeaderClient";

export default async function Header() {
  const { data: cats } = await supabase.from("cats").select("name, slug");

  return <HeaderClient cats={cats ?? []} />;
}
