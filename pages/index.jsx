import React from 'react'

import Hero from '@/components/Hero/Hero'
import Layout from '@/layouts/Default/Layout'

export default function index() {
  return (
    <Layout main={<Hero/>}/>
  )
}
