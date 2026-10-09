import { ogContentType, ogSize, renderOg } from "@/lib/og";

export const alt =
  "López Tech: sitios web y aplicaciones móviles, de la idea a la publicación";
export const size = ogSize;
export const contentType = ogContentType;

export default async function Image() {
  return renderOg({
    title: "Tu sitio web o tu app, de la idea a la publicación",
    subtitle: "Desarrollo web y de apps móviles desde Argentina.",
  });
}
