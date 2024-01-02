import Footer from '@/components/Footer/Footer';
import Navbar from '@/components/Navbar/Navbar';
import React, { Component } from 'react'

export default class Layout extends Component {
    render() {
        return (
            <>
                <header className="pt-5 px-0">
                    <Navbar/>
                </header>
                <div>
                    {this.props.main}
                </div>
                <footer>
                    <Footer/>
                </footer>
            </>
        );
    }
}