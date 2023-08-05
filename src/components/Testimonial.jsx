import Image from 'next/image'
import clsx from 'clsx'

import Link from 'next/link'

import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { GridPattern } from '@/components/GridPattern'

export function Testimonial({ children, client, className }) {
  return (
    <div
      className={clsx(
        'relative isolate bg-neutral-50 py-16 sm:py-28 md:py-32',
        className
      )}
    >
      <GridPattern
        className="absolute inset-0 -z-10 h-full w-full fill-sky stroke-slate-950/5 [mask-image:linear-gradient(to_bottom_left,white_50%,transparent_60%)]"
        yOffset={-256}
      />
      <Container>
        <FadeIn>
          <figure className="mx-auto max-w-4xl">
            <blockquote className="font-display relative text-3xl font-medium italic tracking-tight text-neutral-950 sm:text-4xl">
              <p className="before:content-['“'] after:content-['”'] sm:before:absolute sm:before:right-full">
                {children}
              </p>
            </blockquote>
            <figcaption className="mt-10">
              <p className="text-xl">~ {client.name}</p>
              {/* <Image src={client.logo} alt={client.name} unoptimized /> */}
              {/* Fiverr Reviews Button */}
              <div className="flex flex-col items-center">
                <Link
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.fiverr.com/allanhillman"
                  className="mt-5 w-3/6 rounded-full bg-blue py-2 text-center font-semibold text-white transition hover:bg-cyan sm:w-2/6"
                >
                  Read All Reviews
                </Link>
              </div>
            </figcaption>
          </figure>
        </FadeIn>
      </Container>
    </div>
  )
}
