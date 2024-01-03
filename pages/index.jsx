import Head from 'next/head'
import Hero from '@/components/Hero/Hero'
import WorkCard from '@/components/Works/WorkCard'
import Layout from '@/layouts/Default/Default'

export default function index() {
  return (
  <>
  <Head>
  <title>Work</title>
  </Head>
  <Layout content={
    <>
      <WorkCard/>
    </>
  }
    />
  </>
  )
}
