import Head from 'next/head'

import Layout from '@/layouts/Default/Default'

import Hero from '@/components/Hero/Hero'
import WorkCard from '@/components/Works/WorkCard'
import WorkBox from '@/components/Works/WorkBox'
import Title from '@/components/Hero/Title'
import DownArrow from '@/components/DownArrow/DownArrow'
import About from '@/components/Aboutme/About'

export default function index() {
  return (
    <>
      <Head>
        <title>Work</title>
        <meta name="description" content="Portfolio of Karan Goel" />
      </Head>

      <Layout content={
        <>
          <section>
            <Hero />
            <DownArrow />
          </section>

          <section>
            <Title name="About me" id="About"/>
            <About/>
          </section>

          <section>
            <Title name="Experience" id="Exp"/>
          </section>

          <section>
            <Title name="Projects" sub="Works completed." />
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

          <section>
            <Title name="Contact me" id="Contact"/>
          </section>
        </>
      }
      />
    </>
  )
}
