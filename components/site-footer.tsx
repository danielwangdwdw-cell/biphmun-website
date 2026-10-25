import Link from 'next/link'
import { contact, navItems } from '@/lib/site'

export function SiteFooter() {
  return (
    <footer className="bg-muted">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 lg:grid-cols-[1fr_1.6fr] lg:gap-16">

        <div className="flex flex-col gap-6">
          <div>
            <h2 className="text-sm font-semibold text-muted-foreground">Address</h2>
            <p className="mt-2 max-w-sm text-base leading-relaxed">{contact.address}</p>
          </div>
          <div>
            <h2 className="text-sm font-semibold text-muted-foreground">Contact</h2>
            <a
              href={`mailto:${contact.email}`}
              className="mt-2 inline-block text-base font-medium text-brand hover:underline"
            >
              {contact.email}
            </a>
          </div>
        </div>

        <nav aria-label="Footer" className="grid grid-cols-2 gap-8 sm:grid-cols-4">
          {navItems.map((item) => (
            <div key={item.label}>
              {item.href ? (
                <Link href={item.href} className="text-sm font-semibold hover:text-brand">
                  {item.label}
                </Link>
              ) : (
                <>
                  <h2 className="text-sm font-semibold">{item.label}</h2>
                  <ul className="mt-3 flex flex-col gap-2">
                    {item.children?.map((child) => (
                      <li key={child.label}>
                        {child.external ? (
                          <a
                            href={child.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm text-muted-foreground hover:text-foreground"
                          >
                            {child.label}
                          </a>
                        ) : (
                          <Link
                            href={child.href}
                            className="text-sm text-muted-foreground hover:text-foreground"
                          >
                            {child.label}
                          </Link>
                        )}
                      </li>
                    ))}
                  </ul>
                </>
              )}
            </div>
          ))}
        </nav>
      </div>
      <div className="mx-auto max-w-7xl px-6 pb-10">
        <p className="text-xs text-muted-foreground">
          {'© 2026 BASIS International School Park Lane Harbour Model United Nations'}
        </p>
      </div>
    </footer>
  )
}
