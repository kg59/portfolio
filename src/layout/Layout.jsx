import React, { Component } from 'react';

import Navbar from 'components/Navbar/Navbar'
import Footer from 'components/Footer/Footer';


/**
 * Base Layout
 * Takes main prop
 * 
 * Todo: Add more layouts for other pages, add state store, add functionality to read Markdown files
 */
class Layout extends Component {
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

export default Layout;