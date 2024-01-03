import Head from 'next/head'
import Hero from '@/components/Hero/Hero'
import WorkCard from '@/components/Works/WorkCard'
import WorkBox from '@/components/Works/WorkBox'
import Layout from '@/layouts/Default/Default'

export default function index() {
  return (
  <>
  <Head>
  <title>Work</title>
  </Head>
  <Layout content={
    <>
      <Hero/>
      <WorkBox 
      card1={<WorkCard name="Project1" description="Project1"/>} 
      card2={<WorkCard name="Project2" description="Project2" cardbig={true}/>}
      />
      <WorkBox 
      card1={<WorkCard name="Project3" description="Project3" cardbig={true}/>} 
      card2={<WorkCard name="Project4" description="Project4" imagemob={true}/>}
      />  
    </>
  }
    />
  </>
  )
}
