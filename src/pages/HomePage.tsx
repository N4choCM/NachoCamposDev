import { Hero } from '@/components/home/Hero'
import { About } from '@/components/home/About'
import { ExperienceTimeline } from '@/components/home/ExperienceTimeline'
import { ProjectsGrid } from '@/components/home/ProjectsGrid'
import { SkillsGrid } from '@/components/home/SkillsGrid'
import { EducationSection } from '@/components/home/EducationSection'
import { ContactSection } from '@/components/home/ContactSection'

export function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <ExperienceTimeline />
      <ProjectsGrid />
      <SkillsGrid />
      <EducationSection />
      <ContactSection />
    </>
  )
}
