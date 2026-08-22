import { Mail, MessageCircle, Phone } from 'lucide-react'
import { profile } from '@/data/profile'
import { useI18n } from '@/i18n/context'
import { SectionHeading } from '@/components/ui'

export function ContactSection() {
  const { t } = useI18n()

  const contacts = [
    {
      icon: Mail,
      label: t.contact.email,
      value: profile.email,
      href: `mailto:${profile.email}`,
      wrap: true,
    },
    {
      icon: Phone,
      label: t.contact.phone,
      value: profile.phone,
      href: `tel:${profile.phone.replace(/\s/g, '')}`,
      wrap: false,
    },
    {
      icon: MessageCircle,
      label: t.contact.whatsapp,
      value: t.contact.whatsappCta,
      href: profile.whatsapp,
      wrap: false,
    },
  ]

  return (
    <section className="section-alt py-20">
      <div className="section-container">
        <SectionHeading
          id="contact"
          title={t.sections.contact}
          subtitle={t.contact.subtitle}
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {contacts.map(({ icon: Icon, label, value, href, wrap }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith('http') ? '_blank' : undefined}
              rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
              className="glass group cursor-pointer rounded-xl p-6 shadow-sm transition hover:shadow-md hover:shadow-brand-500/5"
            >
              <Icon className="mb-3 h-8 w-8 text-brand-500 transition group-hover:scale-110" />
              <p className="text-sm font-medium text-zinc-500">{label}</p>
              <p
                className={`mt-1 font-semibold ${
                  wrap ? 'break-all text-sm sm:text-base' : ''
                }`}
              >
                {value}
              </p>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
