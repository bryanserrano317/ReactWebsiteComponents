import React from 'react';
import './NotFound.css';
import Navbar from './Navbar';
import Footer from './Footer';
 

function NotFound() {
    return (
        <>
            <div className='notFound'>
                <div className='notFound-container'>
                <h1 class="notFound-header">404 Page Not Found
                    <p class="notFound-text">The page you requested does not exist. <a href="/">Return to homepage</a>
                    </p>
                    </h1>
                </div>
            </div>
            <Footer/>
        </>
    )
}

export default NotFound;