import { NextResponse } from "next/server";
import { ListObjectsV2Command } from "@aws-sdk/client-s3";
import { r2 } from "@/lib/r2";

export async function GET(
  request: Request,
  { params }: { params: Promise<{ slug: string }> },
) {
  const { slug } = await params;

  try {
    const result = await r2.send(
      new ListObjectsV2Command({
        Bucket: process.env.R2_BUCKET_NAME!,
        Prefix: `${slug}/`,
      }),
    );

    const baseUrl = process.env.NEXT_PUBLIC_IMAGE_BASE_URL!;

    const photos =
      result.Contents?.map((file) => ({
        key: file.Key,
        url: `${baseUrl}/${file.Key}`,
      })) ?? [];

    return NextResponse.json(photos);
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      { error: "Failed to load photos" },
      { status: 500 },
    );
  }
}
