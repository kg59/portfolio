import Head from 'next/head'
import Layout from '@/layouts/Default/Default'


export default function play() {
  return (
    <>
    <Head>
    <title>Play</title>
    </Head>
    <Layout content={
      <div>
        play
      </div>
    }
      />
    </>
  )
}
