"use client";

import Link from 'next/link';
import React from 'react'

export default function DownArrow() {
  return (
    <div className="downa-container">
       <Link href="#About" title="continue"><div className="downa-arrow">&#8595;</div></Link> 
    </div>
  )
}
