export const contact = {
  address:
    'BASIS International School Park Lane Harbour, Songtao Road, Park Lane Harbour, Daya Bay, Huizhou, Guangdong, China',
  email: 'mun-biph@basischina.com',
}

// Replace "#" with the real form and PDF links when they are ready.
export const externalLinks = {
  individualRegistration:
    'https://forms.cloud.microsoft/Pages/ResponsePage.aspx?id=4uHGy7umAkC73G2okqBRpyxBj1RzyhJNn5DfxMaoE5pUQk1RUzNJQzRVNFNRQU5FU0FKVlZaMElJUC4u',
  schoolRegistration: '#',
  chairApplication:
    'https://forms.cloud.microsoft/Pages/ResponsePage.aspx?id=4uHGy7umAkC73G2okqBRpyxBj1RzyhJNn5DfxMaoE5pUNVRRQkVQMkhUUUlHOExaQTBDSUY0UTZGQS4u',
  volunteerRegistration:
    'https://forms.cloud.microsoft/Pages/ResponsePage.aspx?id=4uHGy7umAkC73G2okqBRpyxBj1RzyhJNn5DfxMaoE5pUMkxaVjQ0WUcxQjNCRlJPQ1ZDNzJKUVBBWS4u',
  delegateHandbook: '#',
  chairHandbook: '#',
}

export type NavLink = {
  label: string
  href: string
  external?: boolean
}

export type NavItem = {
  label: string
  href?: string
  children?: NavLink[]
}

export const navItems: NavItem[] = [
  { label: 'About', href: '/' },
  {
    label: 'BIPHMUN 2027',
    children: [
      { label: 'Application', href: '/2027/application' },
      { label: 'Conference Theme', href: '/2027/theme' },
      { label: 'Conference Committees', href: '/2027/committees' },
      { label: 'Leadership Team', href: '/2027/leadership' },
      { label: 'Schedule', href: '/2027/schedule' },
      { label: 'Accommodation & Transportation', href: '/2027/travel' },
    ],
  },
  {
    label: 'Resources',
    children: [
      { label: 'Delegate Handbook', href: externalLinks.delegateHandbook, external: true },
      { label: 'Chair Handbook', href: externalLinks.chairHandbook, external: true },
      { label: 'Scope of Discussion', href: '/resources/scope-of-discussion' },
    ],
  },
  { label: 'Tools', href: '/tools' },
]
