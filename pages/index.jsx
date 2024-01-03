import Head from 'next/head'
import Hero from '@/components/Hero/Hero'
import WorkCard from '@/components/Works/WorkCard'
import WorkBox from '@/components/Works/WorkBox'
import Layout from '@/layouts/Default/Default'

import imagePresets from '@/config/presets.json' 

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
      card1={<WorkCard name="Project1" description="Project1" cardbig={true}/>}
      card3={<WorkCard name="Project2" cardcolor="pink" description="Project2" imagemob={true} imagepreset={imagePresets.mob}/>} 
      card2={<WorkCard name="Project1" description="Project1" cardmobile={true}/>}
      />
      <WorkBox 
      card4={<WorkCard name="Project4" description="Project4" cardbig={true}/>}
      card2={<WorkCard name="Project3" cardcolor="pink" description="Project3" imagemob={true} imagepreset={imagePresets.mob}/>} 
      card3={<WorkCard name="Project4" description="Project4" cardmobile={true}/>}
      />  
    </>
  }
    />
  </>
  )
}
