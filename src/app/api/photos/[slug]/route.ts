import { NextResponse } from "next/server";
import { getPhotos } from "@/lib/getPhotos";

export async function GET(
  request: Request,
  { params }: { params: Promise<{ slug: string }> },
) {
  const { slug } = await params;

  try {
    const photos = await getPhotos(slug);
    return NextResponse.json(photos);
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      { error: "Failed to load photos" },
      { status: 500 },
    );
  }
}

