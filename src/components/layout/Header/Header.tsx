import { cn } from '@/utils/cn'
import { Link } from '@/components/ui/Link/Link'

type HeaderNavItem = {
  label: string
  href: string
}

type HeaderProps = {
  homeHref?: string
  serviceName: string
  logoLabel?: string
  utilityLinks?: HeaderNavItem[]
  navigation?: HeaderNavItem[]
  className?: string
}

function Header({
  homeHref = '#',
  serviceName,
  logoLabel = 'Government service home',
  utilityLinks = [],
  navigation = [],
  className,
}: HeaderProps) {
  return (
    <header data-slot="header" className={cn('border-b border-border-default bg-bg-default', className)}>
      <a href="#main-content" className="sr-only-focusable">
        Skip to main content
      </a>
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-4">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <a
            href={homeHref}
            className="inline-flex items-center gap-3 rounded-sm focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-border-focus focus-visible:ring-offset-2"
            aria-label={logoLabel}
          >
            <span
              aria-hidden="true"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary text-sm font-semibold text-text-on-primary"
            >
              GOV
            </span>
            <span className="text-lg font-semibold text-text-default">{serviceName}</span>
          </a>

          {utilityLinks.length > 0 && (
            <div className="flex flex-wrap items-center gap-4">
              {utilityLinks.map((item) => (
                <Link key={item.href} href={item.href} underline="hover" size="sm">
                  {item.label}
                </Link>
              ))}
            </div>
          )}
        </div>

        {navigation.length > 0 && (
          <nav aria-label="Primary navigation">
            <ul className="flex flex-wrap items-center gap-4">
              {navigation.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} underline="hover" tone="subtle">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        )}
      </div>
    </header>
  )
}

export { Header }
export type { HeaderProps, HeaderNavItem }
