"use client";

import Footer from '@/components/Footer/Footer';
import Navbar from '@/components/Navbar/Navbar';
import ScrollingWaves from '@/components/Waves/ScrollingWaves';


export default function Layout({content}) {
    return (
        <>
            <header className="pt-5 px-0">
                <Navbar/>
            </header>
                <ScrollingWaves content={
                    <div className="content">{content}</div>
                }/>
            <footer>
                <Footer/>
            </footer>
        </>
    )
}
