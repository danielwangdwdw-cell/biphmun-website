'use client'

import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { ChevronDown, Menu, X } from 'lucide-react'
import { navItems, type NavItem, type NavLink } from '@/lib/site'
import { cn } from '@/lib/utils'

function isActive(item: NavItem, pathname: string) {
  if (item.href) return item.href === pathname
  return item.children?.some((child) => child.href === pathname) ?? false
}

function ItemLink({
  link,
  className,
  onNavigate,
}: {
  link: NavLink
  className?: string
  onNavigate?: () => void
}) {
  if (link.external) {
    return (
      <a
        href={link.href}
        target="_blank"
        rel="noopener noreferrer"
        className={className}
        onClick={onNavigate}
      >
        {link.label}
        <span className="sr-only"> (opens in a new tab)</span>
      </a>
    )
  }
  return (
    <Link href={link.href} className={className} onClick={onNavigate}>
      {link.label}
    </Link>
  )
}

function DesktopDropdown({
  item,
  active,
  open,
  onOpen,
  onClose,
}: {
  item: NavItem
  active: boolean
  open: boolean
  onOpen: () => void
  onClose: () => void
}) {
  const panelId = `menu-${item.label.toLowerCase().replace(/\s+/g, '-')}`
  return (
    <div
      className="flex h-full items-center"
      onMouseEnter={onOpen}
      onMouseLeave={onClose}
      onKeyDown={(e) => {
        if (e.key === 'Escape') onClose()
      }}
      onBlur={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget as Node | null)) onClose()
      }}
    >
      <button
        type="button"
        aria-expanded={open}
        aria-controls={panelId}
        onClick={() => (open ? onClose() : onOpen())}
        className={cn(
          'flex h-full items-center gap-1 px-4 text-sm font-medium transition-colors',
          active || open ? 'text-white' : 'text-white/70 hover:text-white',
        )}
      >
        {item.label}
        <ChevronDown
          className={cn('size-3.5 transition-transform', open && 'rotate-180')}
          aria-hidden="true"
        />
      </button>

      <div
        id={panelId}
        className={cn(
          'absolute inset-x-0 top-full border-t border-white/10 bg-brand transition-opacity duration-200',
          open ? 'visible opacity-100' : 'invisible opacity-0',
        )}
      >
        <div className="mx-auto max-w-7xl px-6 pb-14 pt-10">
          <p className="text-sm font-medium text-white/60">{item.label}</p>
          <ul className="mt-6 flex flex-col gap-3">
            {item.children?.map((child) => (
              <li key={child.label}>
                <ItemLink
                  link={child}
                  onNavigate={onClose}
                  className="inline-block text-3xl font-bold tracking-tight text-white transition-colors hover:text-white/60 focus-visible:text-white/60 focus-visible:outline-none lg:text-5xl"
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export function SiteHeader() {
  const pathname = usePathname()
  const [mobileOpen, setMobileOpen] = useState(false)
  const [openMenu, setOpenMenu] = useState<string | null>(null)
  const closeMobile = () => setMobileOpen(false)

  return (
    <header className="sticky top-0 z-50 bg-brand text-white">
      <nav
        aria-label="Main"
        className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6"
      >
        <Link
          href="/"
          className="flex items-center gap-3 text-lg font-bold tracking-tight"
          onClick={closeMobile}
        >
          <span className="flex size-10 items-center justify-center bg-transparent">
            <Image
              src="/images/logo-mark.png"
              alt=""
              width={1302}
              height={1185}
              className="h-auto w-full"
              priority
            />
          </span>
          BIPHMUN
        </Link>

        <ul className="hidden h-full items-stretch md:flex">
          {navItems.map((item) => {
            const active = isActive(item, pathname)
            return (
              <li key={item.label} className="flex items-center">
                {item.children ? (
                  <DesktopDropdown
                    item={item}
                    active={active}
                    open={openMenu === item.label}
                    onOpen={() => setOpenMenu(item.label)}
                    onClose={() => setOpenMenu(null)}
                  />
                ) : (
                  <Link
                    href={item.href!}
                    aria-current={active ? 'page' : undefined}
                    className={cn(
                      'px-4 py-2 text-sm font-medium transition-colors',
                      active ? 'text-white' : 'text-white/70 hover:text-white',
                    )}
                  >
                    {item.label}
                  </Link>
                )}
              </li>
            )
          })}
        </ul>

        <button
          type="button"
          className="-mr-2 p-2 md:hidden"
          aria-expanded={mobileOpen}
          aria-controls="mobile-menu"
          onClick={() => setMobileOpen((v) => !v)}
        >
          {mobileOpen ? (
            <X className="size-6" aria-hidden="true" />
          ) : (
            <Menu className="size-6" aria-hidden="true" />
          )}
          <span className="sr-only">{mobileOpen ? 'Close menu' : 'Open menu'}</span>
        </button>
      </nav>

      {mobileOpen && (
        <div
          id="mobile-menu"
          className="h-[calc(100svh-4rem)] overflow-y-auto bg-brand px-6 pb-12 pt-4 md:hidden"
        >
          <ul className="flex flex-col gap-10">
            {navItems.map((item) => (
              <li key={item.label}>
                {item.href ? (
                  <Link
                    href={item.href}
                    onClick={closeMobile}
                    className="text-3xl font-bold tracking-tight"
                  >
                    {item.label}
                  </Link>
                ) : (
                  <>
                    <p className="text-sm font-medium text-white/60">{item.label}</p>
                    <ul className="mt-3 flex flex-col gap-2">
                      {item.children?.map((child) => (
                        <li key={child.label}>
                          <ItemLink
                            link={child}
                            onNavigate={closeMobile}
                            className="text-2xl font-bold tracking-tight hover:text-white/60"
                          />
                        </li>
                      ))}
                    </ul>
                  </>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  )
}
