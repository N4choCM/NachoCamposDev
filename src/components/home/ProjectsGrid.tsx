import type { ReactNode } from 'react'
import { ExternalLink, FileText, Github, Play } from 'lucide-react'
import { GITHUB_REPOS_URL } from '@/constants/site'
import { projects } from '@/data/projects'
import { projectImages } from '@/data/projectImages'
import { useI18n, useLocalized } from '@/i18n/context'
import { Button, SectionHeading, TechBadge } from '@/components/ui'
import type { ProjectItem } from '@/data/types'

export function ProjectsGrid() {
  const { t } = useI18n()

  return (
    <section className="py-20">
      <div className="section-container">
        <SectionHeading id="projects" title={t.sections.projects} />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        <div className="mt-10 flex justify-center lg:justify-start">
          <Button href={GITHUB_REPOS_URL} variant="secondary" target="_blank">
            <Github className="h-4 w-4" />
            {t.projects.viewMore}
          </Button>
        </div>
      </div>
    </section>
  )
}

function resolveProjectImage(image: ProjectItem['image'], locale: 'en' | 'es'): string {
  const key = typeof image === 'string' ? image : image[locale]
  return projectImages[key] ?? key
}

function ProjectCard({ project }: { project: ProjectItem }) {
  const { t, locale } = useI18n()
  const description = useLocalized(project.description)
  const imageSrc = resolveProjectImage(project.image, locale)

  return (
    <article className="group glass flex flex-col overflow-hidden rounded-xl shadow-sm transition hover:shadow-lg hover:shadow-brand-500/5">
      <div className="relative aspect-video overflow-hidden">
        <img
          src={imageSrc}
          alt={project.title}
          className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
          loading="lazy"
        />
      </div>

      <div className="flex flex-1 flex-col p-5">
        <h3 className="text-lg font-semibold">{project.title}</h3>

        <div className="mt-2 flex flex-wrap gap-1.5">
          {project.tech.map((tech) => (
            <TechBadge key={tech} label={tech} />
          ))}
        </div>

        <p className="mt-3 flex-1 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
          {description}
        </p>

        <div className="mt-4 flex flex-wrap gap-3">
          {project.links.github && (
            <ProjectLink
              href={project.links.github}
              icon={<Github className="h-4 w-4" />}
              label={t.projects.viewCode}
            />
          )}
          {project.links.demo && (
            <ProjectLink
              href={project.links.demo}
              icon={<ExternalLink className="h-4 w-4" />}
              label={t.projects.viewDemo}
            />
          )}
          {project.links.docs && (
            <ProjectLink
              href={project.links.docs}
              icon={<FileText className="h-4 w-4" />}
              label={t.projects.viewDocs}
            />
          )}
          {project.links.store && (
            <ProjectLink
              href={project.links.store}
              icon={<Play className="h-4 w-4" />}
              label={t.projects.viewStore}
            />
          )}
        </div>
      </div>
    </article>
  )
}

function ProjectLink({
  href,
  icon,
  label,
}: {
  href: string
  icon: ReactNode
  label: string
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-1.5 text-sm font-medium text-brand-600 transition hover:text-brand-500 dark:text-brand-400"
    >
      {icon}
      {label}
    </a>
  )
}
