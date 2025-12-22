import { notFound } from "next/navigation"
import { projects } from "@/data/projects"
import { ProjectDetailContent } from "@/components/projects/ProjectDetailContent"

interface ProjectDetailPageProps {
  params: {
    slug: string
  }
}

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }))
}

export default function ProjectDetailPage({ params }: ProjectDetailPageProps) {
  const project = projects.find((p) => p.slug === params.slug)

  if (!project) {
    notFound()
  }

  return <ProjectDetailContent project={project} />
}

