import { ListObjectsV2Command } from "@aws-sdk/client-s3";
import { r2 } from "./r2";

export async function getPhotos(slug: string) {
  const result = await r2.send(
    new ListObjectsV2Command({
      Bucket: process.env.R2_BUCKET_NAME!,
      Prefix: `${slug}/`,
    }),
  );

  return (
    result.Contents?.filter((file) => file.Key && !file.Key.endsWith("/")).map(
      (file) => ({
        key: file.Key!,
        url: `${process.env.NEXT_PUBLIC_IMAGE_BASE_URL}/${file.Key}`,
      }),
    ) ?? []
  );
}
