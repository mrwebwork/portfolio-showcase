import { Container } from '@/components/Container'
import { GridList, GridListItem } from '@/components/GridList'
import { PageIntro } from '@/components/PageIntro'
import { PageLinks } from '@/components/PageLinks'
import { SectionIntro } from '@/components/SectionIntro'
import { StatList, StatListItem } from '@/components/StatList'

import { loadMDXMetadata } from '@/lib/loadMDXMetadata'

function Culture() {
  return (
    <div className="mx-5 mt-24 rounded-large bg-blue py-24 sm:mt-32 lg:py-32">
      <SectionIntro
        eyebrow="My Philosophy"
        title="Aligning Excellence, Balance, and Passion"
        invert
      >
        <p>
          I believe in delivering quality while maintaining a healthy work-life
          balance.
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <GridList>
          <GridListItem title="Dedication" invert>
            Committed to every project, I produce high-quality work illustrating
            my commitment to every project.
          </GridListItem>
          <GridListItem title="Versatility" invert>
            Leveraging my adaptable work ethic, I manage projects with care and
            efficiency across environments.
          </GridListItem>
          <GridListItem title="Empathy" invert>
            Understanding that everyone has their unique challenges, I ensure to
            communicate effectively and kindly.
          </GridListItem>
        </GridList>
      </Container>
    </div>
  )
}

export const metadata = {
  title: 'About Me',
  description:
    'My strength lies in a collaborative approach, which puts my clients & stakeholders at the center of everything I do. ',
}

export default async function About() {
  let blogArticles = (await loadMDXMetadata('blog')).slice(0, 2)

  return (
    <>
      <PageIntro eyebrow="About me" title="My strength is collaboration">
        <p>
          Working in synergy with cross-functional teams has always enabled me
          to achieve the best results.
        </p>
        <div className="mt-10 max-w-2xl space-y-6 text-base">
          <p>
            As a Front-End Engineer, I bring ideas to life in the digital world.
            With extensive experience in popular CMS platforms like Shopify and
            WordPress, I have honed my skills in HTML, SCSS, JS, React.js,
            Next.js, AWS, and Vercel.
          </p>
          <p>
            I craft user-friendly interfaces for an exceptional online
            experience. My passion fuels my continuous learning, helping me to
            deliver top-notch results, on time. Always excited for new
            challenges, I strive to deliver exceptional digital experiences that
            engage and delight users.
          </p>
        </div>
      </PageIntro>
      <Container className="mt-16">
        <StatList>
          <StatListItem value="6" label="Years of Experience" />
          <StatListItem value="1M+" label="Top Website Views" />
          <StatListItem value="40" label="Code Sprints Led" />
          <StatListItem value="4" label="CMS Platforms Used" />
        </StatList>
      </Container>

      <Culture />

      <PageLinks
        className="mt-24 sm:mt-32"
        title="Latest blogs"
        intro="Discover cutting-edge techniques and emerging trends in web
        development. Learn from ground zero site-building to mastering Shopify."
        pages={blogArticles}
      />
    </>
  )
}
