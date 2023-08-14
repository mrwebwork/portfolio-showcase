import Image from 'next/image'
import Link from 'next/link'

import { Container } from '@/components/Container'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'
import { List, ListItem } from '@/components/List'
import { SectionIntro } from '@/components/SectionIntro'
import { StylizedImage } from '@/components/StylizedImage'
import { Testimonial } from '@/components/Testimonial'
import { StatList, StatListItem } from '@/components/StatList'
import { Button } from '@/components/Button'

import imageCoder from '@/images/home/coder.jpg'

import { loadMDXMetadata } from '@/lib/loadMDXMetadata'

const clients = [
  ['Montauk Group', 'https://shopthemontaukgroup.com/'],
  ['Yas Mena Cycles', 'https://yascycles.com/'],
  ['Frontline Optics', 'https://frontline-optics.com/'],
  ['Together Beverages', 'https://togetherbeverages.com/'],
  ['TŌNEM', 'https://puretonetherapy.com/'],
  // ['Luxsone', 'https://luxsone.com/'],
  ['UHRD Music', 'https://uhrdshop.com/'],
  ['VNC Sales & Marketing', 'https://vncsales.com/'],
]

function Clients() {
  return (
    <div className="mx-5 mt-24 rounded-large bg-blue py-20 sm:mt-32 sm:py-32">
      <Container>
        <FadeIn className="flex items-center gap-x-8">
          <h2 className="text-center text-xl font-semibold text-white sm:text-left lg:text-2xl">
            I have worked with dozens of amazing companies worldwide
          </h2>
          <div className="h-px flex-auto bg-sky" />
        </FadeIn>
        <FadeInStagger faster>
          <ul
            role="list"
            className="mt-10 grid grid-cols-2 gap-x-8 gap-y-10 lg:grid-cols-4"
          >
            {/* Add logo as a parameter when adding images of companies */}
            {clients.map(([client, url]) => (
              <li key={client}>
                <FadeIn>
                  <Link
                    key={client}
                    rel="noopener noreferrer"
                    target="_blank"
                    href={url}
                    className="text-lg font-bold text-white lg:text-xl"
                  >
                    {client}
                  </Link>
                  {/* <Image src={logo} alt={client} unoptimized /> */}
                </FadeIn>
              </li>
            ))}
          </ul>
        </FadeInStagger>
      </Container>
    </div>
  )
}

function Skills() {
  return (
    <>
      <SectionIntro
        eyebrow="Crafting the Web, One Line at a Time"
        title="Technical Skills"
        className="font mt-24 sm:mt-32 lg:mt-40"
      >
        <p>
          My strengths include front-end development with a focus on responsive
          and interactive designs. I strive to stay on top of the latest trends
          and advancements in web development to deliver innovative and
          efficient solutions. Below, you&apos;ll find a list of my core
          technical skills.
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <div className="lg:flex lg:items-center lg:justify-end">
          <div className="flex justify-center lg:w-1/2 lg:justify-end lg:pr-12">
            <FadeIn className="w-[33.75rem] flex-none lg:w-[45rem]">
              <StylizedImage
                src={imageCoder}
                sizes="(min-width: 1024px) 41rem, 31rem"
                className="justify-center lg:justify-end"
              />
            </FadeIn>
          </div>
          <List className="mt-16 lg:mt-0 lg:w-1/2 lg:min-w-[33rem] lg:pl-4">
            <ListItem title="JavaScript & TypeScript">
              I&apos;ve been able to create dynamic projects, including a{' '}
              <Link
                className="font-semibold text-blue underline underline-offset-4 hover:text-cyan"
                target="_blank"
                rel="noopener noreferrer"
                href="https://messenger-six-nu.vercel.app/"
              >
                Messenger Chatbot
              </Link>{' '}
              and a{' '}
              <Link
                className="font-semibold text-blue underline underline-offset-4 hover:text-cyan"
                target="_blank"
                rel="noopener noreferrer"
                href="https://spotify-sigma-six.vercel.app/"
              >
                {' '}
                Spotify Music Clone
              </Link>
              . To ensure high-quality development standards, I review Pull
              Requests and use debugging techniques to resolve any potential
              code issues. Furthermore, I&apos;ve expanded the functionality of
              my applications by integrating ChatGPT and Shopify APIs to enhance
              third-party capabilities.
            </ListItem>
            <ListItem title="React.js & Next.js">
              I specialize in crafting innovative and responsive designs. My
              expertise lies in utilizing{' '}
              <strong className="font-semibold text-neutral-950">
                React.js
              </strong>{' '}
              , which elevates the user interface and experience. Recently, I
              worked on an exciting project where I integrated{' '}
              <strong className="font-semibold text-neutral-950">
                Next.js
              </strong>{' '}
              and the{' '}
              <strong className="font-semibold text-neutral-950">
                ChatGPT API
              </strong>{' '}
              into our code base. This integration resulted in the creation of a
              new search feature on our website. By enabling users to retrieve
              relevant articles and questions based on their queries, we
              significantly enhanced the interactivity of the site.
            </ListItem>
            <ListItem title="Shopify Plus">
              Over the past 5 years, I&apos;ve had the pleasure of working with
              numerous clients and building over 100 Shopify stores. One of my
              standout accomplishments was successfully{' '}
              <strong className="font-semibold text-neutral-950">
                leading a migration
              </strong>{' '}
              from BigCommerce to Shopify Plus for a client with an annual
              revenue of over{' '}
              <strong className="font-semibold text-neutral-950">
                $6 million
              </strong>{' '}
              dollars. Additionally, I&apos;ve developed custom sections,
              snippets, themes, and pages that improve the overall user
              interface and experience, resulting in increased conversions.
            </ListItem>
            <ListItem title="Tailwind CSS">
              I have successfully used Tailwind to improve e-commerce
              performance and reduce website bounce rates by creating{' '}
              <strong className="font-semibold text-neutral-950">
                responsive
              </strong>{' '}
              and{' '}
              <strong className="font-semibold text-neutral-950">
                visually appealing
              </strong>{' '}
              pages. This has resulted in increased conversion rates and
              improved user experience. I have also applied my Tailwind skills
              to personal and client projects.
            </ListItem>
          </List>
        </div>
        <div className="flex flex-col items-center">
          <Link
            href="/process"
            className="mt-5 w-5/6 rounded-full bg-blue py-2 text-center font-semibold text-white transition hover:bg-cyan sm:w-3/6 md:w-2/6 xl:w-1/6"
          >
            Learn My Process
          </Link>
        </div>
      </Container>
    </>
  )
}

function CaseStudies({ caseStudies }) {
  return (
    <>
      <SectionIntro
        title="Showcasing Innovation and Expertise"
        className="mt-24 sm:mt-32 lg:mt-40"
      >
        <p>
          I am passionate about transforming ideas into reality by harnessing
          cutting-edge technology and innovative thinking. Below, you will find
          a curated collection of my personal projects. Through these projects,
          I have explored various tools, techniques, and technologies to create
          practical, real-world solutions.
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <FadeInStagger className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {caseStudies.map((caseStudy) => (
            <FadeIn key={caseStudy.href} className="flex">
              <article className="relative flex w-full flex-col rounded-3xl p-6 ring-1 ring-sky transition hover:bg-neutral-50 sm:p-8">
                <h3>
                  <Link href={caseStudy.href}>
                    <span className="absolute inset-0 rounded-3xl" />
                    <Image
                      src={caseStudy.logo}
                      alt={caseStudy.client}
                      className="h-16 w-16"
                      unoptimized
                    />
                  </Link>
                </h3>
                <p className="mt-6 flex gap-x-2 text-sm text-neutral-950">
                  <time dateTime={caseStudy.year} className="font-semibold">
                    {caseStudy.date.split('-')[0]}
                  </time>
                  <span className="text-neutral-300" aria-hidden="true">
                    /
                  </span>
                  <span>Web Project</span>
                </p>
                <p className="font-display mt-6 text-2xl font-semibold text-neutral-950">
                  {caseStudy.title}
                </p>
                <p className="mt-4 text-base text-neutral-600">
                  {caseStudy.description}
                </p>
              </article>
            </FadeIn>
          ))}
        </FadeInStagger>
      </Container>
    </>
  )
}

export const metadata = {
  title: 'Allan Hillman - Front-End Engineer',
  description:
    'As a passionate freelance web developer and team leader in Austin, TX, I specialize in creating intuitive web designs that transform ideas into engaging and interactive web experiences. Let me bring your vision to life with my expertise in code and design.',
}

export default async function Home() {
  let caseStudies = (await loadMDXMetadata('work')).slice(0, 3)

  return (
    <>
      <Container className="mt-24 sm:mt-32 md:mt-56">
        <FadeIn className="max-w-3xl">
          <h1 className="font-display text-5xl font-medium tracking-tight text-neutral-950 [text-wrap:balance] sm:text-7xl">
            Allan Hillman Front-End Engineer
          </h1>
          <p className="mt-6 text-xl text-neutral-600">
            Web development is not just my profession
            <span className="hidden md:inline-block">—</span>
            <span className="md:hidden">, </span>it&apos;s my passion. The
            thrill of learning new technologies, coupled with my ability to
            collaborate effectively, fuels my drive to create dynamic,
            user-friendly web experiences.
          </p>
        </FadeIn>
      </Container>

      <Skills />

      <Clients />
      <Container className="mt-16">
        <StatList>
          <StatListItem value="50+" label="Projects Completed" />
          <StatListItem value="28" label="Technologies Used" />
          <StatListItem value="95%" label="Repeat Client Rate" />
          <StatListItem value="99%" label="Client Satisfaction" />
        </StatList>
      </Container>

      <CaseStudies caseStudies={caseStudies} />

      <Testimonial
        className="mt-24 sm:mt-32 lg:mt-40"
        client={{ name: 'kaizen2023' }}
      >
        Allan was great to work with! He is professional and listens to your
        needs. He is patient and seems to make his best effort to ensure your
        expectations are met. He takes his time to ensure there is a quality
        experience and product fulfillment.
      </Testimonial>
    </>
  )
}
