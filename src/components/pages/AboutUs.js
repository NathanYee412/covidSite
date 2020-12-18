import React from 'react';
import Footer from '../Footer';
import './AboutUs.css';

function AboutUs() {
    return (
        <>
            <div className='about-container'>
                <h1>
                    About our project
                </h1>
                <br></br>
                <h3>
                    We decided to create a COVID 19 Tracking website that can show statistics
                    and numbers about the pandemic. We created a Charts page and a useful resources page
                    that has links to COVID 19 swap testing in Orange County.
                </h3>
                <h3>
                    This project was created with ReactJS and can be found on github
                </h3>
                <a href="https://github.com/NathanYee412/covidSite.git">Github Link</a>
                <h3>
                    Contributors: 
                    <ul>
                        <li>Nathan Yee</li>
                        <li>Brittany Kraemer</li>
                        <li>Haowen Yong</li>
                        <li>Alexis Reyes</li>
                    </ul>
                </h3>
            </div>
            <Footer />
        </>
    )
}

export default AboutUs
