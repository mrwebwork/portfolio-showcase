import Link from 'next/link'

import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
// import { Logo } from '@/components/Logo'
import { socialMediaProfiles } from '@/components/SocialMedia'

const navigation = [
  {
    title: 'Projects',
    links: [
      { title: 'Messenger', href: '/work/meta-messenger' },
      { title: 'Spotify', href: '/work/spotify' },
      { title: 'Firebase Auth Guide', href: '/work/firebase-guide' },
      // { title: 'AI SaaS', href: '/work/phobia' },
      {
        title: (
          <>
            See all <span aria-hidden="true">&rarr;</span>
          </>
        ),
        href: '/work',
      },
    ],
  },
  {
    title: 'Navigation',
    links: [
      { title: 'About', href: '/about' },
      { title: 'Process', href: '/process' },
      { title: 'Blog', href: '/blog' },
      { title: 'Contact', href: '/contact' },
    ],
  },
  {
    title: 'Connect',
    links: socialMediaProfiles,
    social: true,
  },
]

function Navigation() {
  // console.log(
  //   socialMediaProfiles.map((el) => {
  //     console.log(el.title)
  //     if (el.title) {
  //       return el.href
  //     }
  //   })
  // )
  return (
    <nav>
      <ul role="list" className="grid grid-cols-2 gap-8 sm:grid-cols-3">
        {navigation.map((section) =>
          section?.social ? (
            // (console.log(section),
            // (console.log(section?.social),
            //**** Social Media Links ****//
            <>
              <li key={section.title}>
                <div className="font-display text-sm font-semibold tracking-wider text-neutral-950">
                  {section.title}
                </div>
                <ul role="list" className="mt-4 text-sm text-neutral-700">
                  {section.links.map((link) => (
                    <li key={link.title} className="mt-4">
                      <Link
                        key={link.title}
                        rel="noopener noreferrer"
                        target="_blank"
                        href={link.href}
                        className="transition hover:text-neutral-950"
                      >
                        {link.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>
            </>
          ) : (
            //****  Regular Nav Links ****//
            <>
              <li key={section.title}>
                <div className="font-display text-sm font-semibold tracking-wider text-neutral-950">
                  {section.title}
                </div>
                <ul role="list" className="mt-4 text-sm text-neutral-700">
                  {section.links.map((link) => (
                    <li key={link.title} className="mt-4">
                      <Link
                        key={link.title}
                        href={link.href}
                        className="transition hover:text-neutral-950"
                      >
                        {link.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>
            </>
          )
        )}
      </ul>
    </nav>
  )
}

export function Footer() {
  return (
    <Container as="footer" className="mt-24 w-full sm:mt-32 lg:mt-40">
      <FadeIn>
        <div className="grid grid-cols-1 gap-x-8 gap-y-16">
          <Navigation />
        </div>
        <div className="mb-20 mt-24 flex flex-wrap items-end justify-between gap-x-6 gap-y-4 border-t border-neutral-950/10 pt-12">
          {/* Footer Logo */}
          {/* <Link href="/" aria-label="Home">
            <Logo className="h-8" fillOnHover />
          </Link> */}
          <p className="text-sm text-neutral-700">
            © Allan Hillman. {new Date().getFullYear()}
          </p>
        </div>
      </FadeIn>
    </Container>
  )
}
