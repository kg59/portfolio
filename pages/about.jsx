import Head from 'next/head'
import Layout from '@/layouts/Default/Default'

export default function about() {
  return (
    <>
    <Head>
    <title>About</title>
    </Head>
    <Layout content={
      <div>
        About
      </div>
    }
      />
    </>
  )
}
