import { cn } from '@/utils/cn'
import { Link } from '@/components/ui/Link/Link'

type FooterLink = {
  label: string
  href: string
}

type FooterProps = {
  organization: string
  address?: string
  contactLinks?: FooterLink[]
  policyLinks?: FooterLink[]
  utilityLinks?: FooterLink[]
  copyright?: string
  className?: string
}

function Footer({
  organization,
  address,
  contactLinks = [],
  policyLinks = [],
  utilityLinks = [],
  copyright,
  className,
}: FooterProps) {
  return (
    <footer data-slot="footer" className={cn('border-t border-border-default bg-bg-subtle', className)}>
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-8">
        <div className="space-y-2">
          <div className="text-lg font-semibold text-text-default">{organization}</div>
          {address && <p className="text-sm text-text-subtle">{address}</p>}
        </div>

        {contactLinks.length > 0 && (
          <div className="flex flex-wrap gap-4">
            {contactLinks.map((item) => (
              <Link key={item.href} href={item.href} underline="hover" size="sm">
                {item.label}
              </Link>
            ))}
          </div>
        )}

        {utilityLinks.length > 0 && (
          <div className="flex flex-wrap gap-4">
            {utilityLinks.map((item) => (
              <Link key={item.href} href={item.href} underline="hover" size="sm">
                {item.label}
              </Link>
            ))}
          </div>
        )}

        {policyLinks.length > 0 && (
          <div className="flex flex-wrap gap-4">
            {policyLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                underline="hover"
                size="sm"
                className={item.label.includes('Privacy') ? 'font-semibold' : undefined}
              >
                {item.label}
              </Link>
            ))}
          </div>
        )}

        {copyright && <p className="text-sm text-text-muted">{copyright}</p>}
      </div>
    </footer>
  )
}

export { Footer }
export type { FooterProps, FooterLink }
