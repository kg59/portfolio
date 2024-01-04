import Head from 'next/head'

import Layout from '@/layouts/Default/Default'

import Hero from '@/components/Hero/Hero'
import WorkCard from '@/components/Works/WorkCard'
import WorkBox from '@/components/Works/WorkBox'
import Title from '@/components/Hero/Title'

export default function index() {
  return (
    <>
      <Head>
        <title>Work</title>
        <meta name="description" content="Works by Karan Goel" />
      </Head>

      <Layout content={
        <>
          <section>
            <Hero />
          </section>

          <section>
          <WorkBox
            card1={<WorkCard name="Project1" description="Project1" cardbig={true} />}
            card3={<WorkCard name="Project2" cardcolor="pink" description="Project2" imagemob={true} />}
            card2={<WorkCard name="Project1" description="Project1" cardmobile={true} />}
          />
          </section>

          <section>
          <Title name="in Progress" sub="Work in various states of design and development, from side projects, to in-flight product design and development." />
          <WorkBox
            card4={<WorkCard name="Project4" description="Project4" cardbig={true} />}
            card2={<WorkCard name="Project3" cardcolor="pink" description="Project3" imagemob={true} />}
            card3={<WorkCard name="Project4" description="Project4" cardmobile={true} />}
          />
          </section>
        </>
      }
      />
    </>
  )
}
