import Footer from '@/components/Footer/Footer';
import Navbar from '@/components/Navbar/Navbar';


export default function Layout({content}) {
    return (
        <>
            <header className="pt-5 px-0">
                <Navbar/>
            </header>
            <div className="content">
                {content}
            </div>
            <footer>
                <Footer/>
            </footer>
        </>
    )
}
