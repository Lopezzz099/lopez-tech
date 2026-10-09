import { ogContentType, ogSize, renderOg } from "@/lib/og";
import { projectBySlug, projects } from "@/lib/projects";

export const size = ogSize;
export const contentType = ogContentType;

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export default async function Image({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projectBySlug(slug);
  return renderOg({
    title: project?.name ?? "Proyecto",
    subtitle: project?.tagline ?? "Un proyecto de López Tech.",
    tag: project?.badge,
  });
}
