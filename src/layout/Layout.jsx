import React, { Component } from 'react';

import Navbar from 'components/Navbar/Navbar'
import Footer from 'components/Footer/Footer';

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