import { Blockquote } from '@/components/Blockquote'
import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { GridList, GridListItem } from '@/components/GridList'
import { GridPattern } from '@/components/GridPattern'
import { List, ListItem } from '@/components/List'
import { PageIntro } from '@/components/PageIntro'
import { SectionIntro } from '@/components/SectionIntro'
import { StylizedImage } from '@/components/StylizedImage'
import { TagList, TagListItem } from '@/components/TagList'

import imageSoloDeveloper from '@/images/process/solo-developer.jpg'
import imageBrainstorm from '@/images/process/brainstorm.jpg'

import imageSpaceShipLaunch from '@/images/process/spaceship-launch.jpg'

function Section({ title, image, children }) {
  return (
    <Container className="group/section [counter-increment:section]">
      <div className="lg:flex lg:items-center lg:justify-end lg:gap-x-8 lg:group-even/section:justify-start xl:gap-x-20">
        <div className="flex justify-center">
          <FadeIn className="w-[33.75rem] flex-none lg:w-[45rem]">
            <StylizedImage
              {...image}
              sizes="(min-width: 1024px) 41rem, 31rem"
              className="justify-center lg:justify-end lg:group-even/section:justify-start"
            />
          </FadeIn>
        </div>
        <div className="mt-12 lg:mt-0 lg:w-[37rem] lg:flex-none lg:group-even/section:order-first">
          <FadeIn>
            <div
              className="font-display text-base font-semibold before:text-neutral-300 before:content-['/_'] after:text-neutral-950 after:content-[counter(section,decimal-leading-zero)]"
              aria-hidden="true"
            />
            <h2 className="font-display mt-2 text-3xl font-medium tracking-tight text-neutral-950 sm:text-4xl">
              {title}
            </h2>
            <div className="mt-6">{children}</div>
          </FadeIn>
        </div>
      </div>
    </Container>
  )
}

function Discover() {
  return (
    <Section title="Envision" image={{ src: imageBrainstorm, shape: 1 }}>
      <div className="space-y-6 text-base text-neutral-600">
        <p>
          I work closely with my clients to understand their{' '}
          <strong className="font-semibold text-neutral-950">needs</strong> and{' '}
          <strong className="font-semibold text-neutral-950">goals</strong>,
          embedding myself into their every day operations to understand their
          business from the inside out.
        </p>
        <p>
          Based on these insights, I develop a strategic plan that goes beyond
          meeting expectations, aiming to{' '}
          <strong className="font-semibold text-neutral-950">
            exceed them
          </strong>
          . This stage includes a detailed timeline, estimated budget, and a
          comprehensive list of deliverables designed for maximum efficiency and
          effectiveness.
        </p>
      </div>

      <h3 className="font-display mt-12 text-base font-semibold text-neutral-950">
        Included in this phase
      </h3>
      <TagList className="mt-4">
        <TagListItem>Virtual Consultation</TagListItem>
        <TagListItem>Business Plan</TagListItem>
        <TagListItem>Estimated Budget</TagListItem>
        <TagListItem>Deliverable Assets</TagListItem>
      </TagList>
      <Blockquote
        author={{ name: 'Chris Shouler', role: 'CEO of The Montauk Group' }}
        className="mt-12"
      >
        True professional. Very valuable and knowledgeable.
      </Blockquote>
    </Section>
  )
}

function Build() {
  return (
    <Section title="Creation" image={{ src: imageSoloDeveloper, shape: 1 }}>
      <div className="space-y-6 text-base text-neutral-600">
        <p>
          During the Build phase, your vision starts to materialize. I consider
          this part to be the most collaborative process in our journey, where I
          transform your business goals and ideas into a tangible digital
          product.
        </p>
        <p>
          I immerse myself in the aesthetics and functionality of your website,
          making sure that every element aligns seamlessly with your brand
          identity and caters to the specific needs of your target audience.
        </p>
        <p>
          I ensure that the final result is not only visually appealing but also
          user-friendly and intuitive. During this collaborative process, I
          welcome your input and feedback to ensure that the website reflects
          your vision and captures the essence of your brand.
        </p>
        <p>
          My aim is to create an engaging and impactful website that not only
          meets your expectations but also surpasses them. By combining your
          unique vision with my technical expertise, we will create a compelling
          online presence that sets you apart from the competition.
        </p>
      </div>
      <h3 className="font-display mt-12 text-base font-semibold text-neutral-950">
        Included in this phase
      </h3>
      <TagList className="mt-4">
        <TagListItem>Custom Prototyping</TagListItem>
        <TagListItem>Documentation</TagListItem>
        <TagListItem>Quality Assurance</TagListItem>
        <TagListItem>Revisions</TagListItem>
        <TagListItem>UX Optimization</TagListItem>
        <TagListItem>Collaboration</TagListItem>
      </TagList>
    </Section>
  )
}

function Deliver() {
  return (
    <Section title="Launch" image={{ src: imageSpaceShipLaunch, shape: 1 }}>
      <div className="space-y-6 text-base text-neutral-600">
        <p>
          {' '}
          <strong className="font-semibold text-neutral-950"></strong>
        </p>
        <p>
          {' '}
          <strong className="font-semibold text-neutral-950"></strong>{' '}
        </p>
        <p>
          {' '}
          <strong className="font-semibold text-neutral-950"></strong>{' '}
          <strong className="font-semibold text-neutral-950"></strong>{' '}
        </p>
      </div>

      <h3 className="font-display mt-12 text-base font-semibold text-neutral-950"></h3>
      <List className="mt-8">
        <ListItem title="QA Testing">
          <p className="pt-3">
            More testing done on website to find any bugs or anything looked
            over.
          </p>
        </ListItem>
        <ListItem title="Production">
          <p className="pt-3">
            Deploy your website to production and make it live for the world to
            see.
          </p>
        </ListItem>
        <ListItem title="Support">
          <p className="pt-3">
            I will be here to support you and your website in the future, this
            is more then just building a website this is a partnership.
          </p>
        </ListItem>
      </List>
    </Section>
  )
}

function Values() {
  return (
    <div className="relative mt-24 pt-24 sm:mt-32 sm:pt-32 lg:pt-40">
      <div className="absolute inset-x-0 top-0 -z-10 h-[884px] overflow-hidden rounded-t-4xl bg-gradient-to-b from-neutral-50">
        <GridPattern
          className="absolute inset-0 h-full w-full fill-sky stroke-slate-950/5 [mask-image:linear-gradient(to_bottom_left,white_40%,transparent_50%)]"
          yOffset={-270}
        />
      </div>

      <SectionIntro
        eyebrow="Business Values"
        title="Learning, Innovating, Succeeding"
      >
        <p>
          Driven by an unwavering passion for my craft, I relentlessly pursue
          excellence, advancing my skills and methodologies to ensure businesses
          stay and remain at the top.
        </p>
      </SectionIntro>

      <Container className="mt-24">
        <GridList>
          <GridListItem title="Loyal">
            My relationship with clients doesn't end at delivery. I aim to
            establish long-term partnerships that extend beyond just business.
          </GridListItem>
          <GridListItem title="Innovative">
            Staying ahead of the curve, constantly integrating emerging
            technologies and trends into my projects.
          </GridListItem>
          <GridListItem title="Honesty">
            Transparency is key in all my processes. I ensure you are fully
            aware and informed every step of the way.
          </GridListItem>
          <GridListItem title="Adaptable">
            Your unique needs are my primary focus. I thrive on challenges,
            skillfully tailoring solutions to fit your specific business
            requirements.
          </GridListItem>
          <GridListItem title="Efficient">
            Respecting your time and resources, always ensuring to meet
            deadlines without compromising the quality of work.
          </GridListItem>
          <GridListItem title="Resilient">
            In the constantly evolving industry, resilience is crucial. I adapt
            to changes, overcome obstacles, and consistently deliver solutions
            that withstand the test of time and technology
          </GridListItem>
        </GridList>
      </Container>
    </div>
  )
}

export const metadata = {
  title: 'My Process',
  description:
    'Dedicated to delivering exceptional value, through a careful and thorough approach focused on understanding client needs, detailed planning, and robust execution. Discover how I operate and strategically plan new projects that lead to success with clients.',
}

export default function Process() {
  return (
    <>
      <PageIntro
        eyebrow="Approaching My Work"
        title="Steps to Success with Clients"
      >
        <p>
          Let's take a deep dive into how I execute web development projects.
        </p>
      </PageIntro>

      <div className="mt-24 space-y-24 [counter-reset:section] sm:mt-32 sm:space-y-32 lg:space-y-40">
        <Discover />
        <Build />
        <Deliver />
      </div>

      <Values />
    </>
  )
}
