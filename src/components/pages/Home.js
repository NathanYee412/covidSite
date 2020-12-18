import React from 'react';
import '../../App.css';
import HeroSection from '../HeroSection';
import Cards from '../Cards';
import Footer from '../Footer';
import NumCards from '../NumCards';

function Home() {
    return(
        <>
            <HeroSection />
            <Cards />
            <NumCards />
            <div className=''>
                <div>
                    <h1>
                        COVID-19 Data Charts
                    </h1>
                </div>
                <div className=''>
                    <ul className='cards__items-chart'>
                        <iframe src="https://ourworldindata.org/grapher/total-cases-covid-19?tab=map" width="100%" height="600px" title="2"></iframe>
                    </ul>
                    <ul className='cards__items-chart'>
                        <iframe src="https://ourworldindata.org/grapher/total-deaths-covid-19?country=ITA+ESP+USA" width="100%" height="600px" border="0px" title="1"></iframe>
                    </ul>
                </div>
            </div>
            <Footer />
            
        </>
    );
}

export default Home;