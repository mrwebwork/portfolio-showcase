import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'

export function ContactSection() {
  return (
    <Container className="mt-24 sm:mt-32 lg:mt-40">
      <FadeIn className="mx-1 rounded-4xl bg-neutral-950 px-6 py-20 sm:mx-0 sm:py-32 md:px-12">
        <div className="mx-auto max-w-4xl">
          <div className="max-w-xl">
            <h2 className="font-display text-3xl font-medium text-white [text-wrap:balance] sm:text-4xl">
              Tell me about your project
            </h2>
            <div className="mt-6 flex">
              <Button href="/contact" invert>
                Get in Touch
              </Button>
            </div>
            <div className="mt-10 border-t border-white/10 pt-10">
            <h2 className="font-display text-3xl font-medium text-white [text-wrap:balance] sm:text-4xl">
              Connect on Fiverr
            </h2>
              <Button className="mt-6" href="https://www.fiverr.com/allanhillman" invert>View Services</Button>
            </div>
          </div>
        </div>
      </FadeIn>
    </Container>
  )
}
