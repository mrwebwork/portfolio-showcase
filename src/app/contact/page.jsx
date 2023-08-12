import { useId } from 'react'

import Link from 'next/link'

import { Border } from '@/components/Border'
import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { PageIntro } from '@/components/PageIntro'
import { SocialMedia } from '@/components/SocialMedia'

function TextInput({ label, ...props }) {
  let id = useId()

  return (
    <div className="group relative z-0 transition-all focus-within:z-10">
      <input
        type="text"
        id={id}
        {...props}
        placeholder=" "
        className="peer block w-full border border-neutral-300 bg-transparent px-6 pb-4 pt-12 text-base/6 text-neutral-950 ring-4 ring-transparent transition focus:border-neutral-950 focus:outline-none focus:ring-neutral-950/5 group-first:rounded-t-2xl group-last:rounded-b-2xl"
      />
      <label
        htmlFor={id}
        className="pointer-events-none absolute left-6 top-1/2 -mt-3 origin-left text-base/6 text-neutral-500 transition-all duration-200 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:font-semibold peer-focus:text-neutral-950 peer-[:not(:placeholder-shown)]:-translate-y-4 peer-[:not(:placeholder-shown)]:scale-75 peer-[:not(:placeholder-shown)]:font-semibold peer-[:not(:placeholder-shown)]:text-neutral-950"
      >
        {label}
      </label>
    </div>
  )
}

function ContactForm() {
  return (
    <FadeIn className="lg:order-last">
      <form>
        <h2 className="font-display text-base font-semibold text-neutral-950">
          Open the Door to Innovation
        </h2>
        <div className="isolate mt-6 -space-y-px rounded-2xl bg-white/50">
          <TextInput label="Name" name="name" autoComplete="name" required />
          <TextInput
            label="Email"
            type="email"
            name="email"
            autoComplete="email"
            required
          />
          <TextInput
            type="text"
            label="Company"
            name="company"
            autoComplete="company"
          />
          <TextInput label="Phone" type="tel" name="phone" autoComplete="tel" />
          <TextInput label="Message" name="message" required />
        </div>
        <Button type="submit" className="mt-10 bg-blue">
          Let's Begin
        </Button>
      </form>
    </FadeIn>
  )
}

function ContactDetails() {
  return (
    <FadeIn>
      <Border className="mt-16 pt-16">
        <h2 className="font-display text-base font-semibold text-neutral-950">
          Email Me
        </h2>
        {/* TODO Fix this */}
        {/* *infinite loop* */}
        <dl className="mt-6 grid grid-cols-1 gap-8 text-sm sm:grid-cols-2">
          {[['tech@allanswebwork.info']].map(([email]) => (
            <div key={email}>
              <dd>
                <h1 className="text-neutral-60">{email}</h1>
              </dd>
            </div>
          ))}
        </dl>
      </Border>

      <Border className="mt-16 pt-16">
        <h2 className="font-display text-base font-semibold text-neutral-950">
          Get In Touch
        </h2>
        <SocialMedia className="mt-6" />
      </Border>
    </FadeIn>
  )
}

export const metadata = {
  title: 'Contact Me',
  description:
    'Connect with Allan Hillman for your web development needs, or just to say hi!',
}

const widthContactIntro = (ContactHeader, customClasses) => {
  return (props) => {
    const overwriteClasses = customClasses
      ?.split(' ')
      .map((c) => `!${c}`)
      .join(' ')
    const className = `${props.className} ${overwriteClasses}`
    let updatedProps = { ...props, className }
    updatedProps.contactHeaderClass = 'mt-[5px]'
    return <ContactHeader {...updatedProps}>{props.children}</ContactHeader>
  }
}

export default function Contact() {
  const Contact = widthContactIntro(PageIntro, 'mt-0')
  return (
    <>
      <Contact eyebrow="Contact Me" title="Start The Conversation">
        <p>Looking forward to crafting your unique web experience.</p>
      </Contact>

      <Container className="mt-24 sm:mt-32">
        <div className="grid grid-cols-1 gap-x-8 gap-y-24 lg:grid-cols-2">
          {/* <ContactForm /> */}
          <ContactDetails />
        </div>
      </Container>
    </>
  )
}
