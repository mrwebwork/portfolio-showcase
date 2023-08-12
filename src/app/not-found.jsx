import Link from 'next/link'

import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'

export default function NotFound() {
  return (
    <Container className="flex h-full items-center pt-24 sm:pt-32 lg:pt-40">
      <FadeIn className="flex max-w-xl flex-col items-center text-center">
        <p className="font-display text-4xl font-semibold text-neutral-950 sm:text-5xl">
          404
        </p>
        <h1 className="font-display mt-4 text-2xl font-semibold text-neutral-950">
          Page not found
        </h1>
        <p className="text-md mt-2 text-neutral-600">
          Uh&mdash;oh! Looks like the page you&apos;re looking for decided to go
          on vacation.
        </p>
        <Link
          href="/"
          className="mt-4 text-sm font-semibold text-neutral-950 transition hover:text-neutral-700"
        >
          Return back home
        </Link>
      </FadeIn>
    </Container>
  )
}
