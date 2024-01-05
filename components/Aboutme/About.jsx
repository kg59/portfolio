import React from 'react'
import Image from 'next/image'

export default function About() {
  return (
    <div className="flex justify-evenly">
        <Image className=" w-[20rem] h-[27rem] bg-sky-400 rounded-t-full" src="/image.jpg" width={75} height={100}/>
        <div className="aboutme">
        </div>
    </div>
  )
}
