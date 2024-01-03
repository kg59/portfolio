import React from 'react'

import Hero from '@/components/Hero/Hero'
import Layout from '@/layouts/Default/Default'

export default function index() {
  return (
    <Layout content={<Hero/>}/>
  )
}
