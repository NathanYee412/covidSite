import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Recent COVID-19 News</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
            src='https://static01.nyt.com/images/2020/12/16/science/16VIRUS-PFIZER/merlin_181252629_02424de9-9b12-448b-9a48-437e3507ee3d-jumbo.jpg?quality=90&auto=webp'
            text='2 Alaska Health Workers Got Emergency Treatment After Receiving Pfizer’s Vaccine'
            label='Vaccine'
            path='/charts'
            />
            <CardItem
              src='https://ca-times.brightspotcdn.com/dims4/default/9b9e141/2147483647/strip/true/crop/5838x3822+0+0/resize/840x550!/quality/90/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2F08%2F0f%2F06034ae54114af7345f2e2e39beb%2Fla-photos-1staff-la-photos-1staff-671464-la-me-stjohns-icu-04.FO.jpg'
              text='California’s record COVID-19 surge persists: 51,724 cases and 393 deaths in a single day'
              label='Cases'
              path='/charts'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;