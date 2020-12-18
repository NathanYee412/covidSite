import React from 'react';
import '../Cards.css';


function UsefulResources() {
    return (
        <div>
            <h1>
                Useful Resources
            </h1>
            <div className='cards__container'>
                <div className='cards__wrapper'>
                    <ul className='cards__items'>
                        <h3>COVID-19 Testing Orange County</h3>
                        <a href='https://360clinic.fulgentgenetics.com/appointment/screen/landing'>
                            <img className='cards__item__pic-wrap-rec' alt='testing' src='https://www.hopkinsmedicine.org/-/media/images/health/1_-conditions/coronavirus/coronavirus-test-teaser.ashx'></img>
                        </a>
                    </ul>
                    <ul>
                        <h3>COVID-19 Symptoms</h3>
                        <a href='https://www.youtube.com/watch?v=F70BzSFAZfw'>
                            <img className='cards__item__pic-wrap-rec' alt='symptoms' src='https://i.ytimg.com/vi/F70BzSFAZfw/maxresdefault.jpg'></img>
                        </a>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default UsefulResources
