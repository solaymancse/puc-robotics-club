import React from 'react';
import img11 from '../../images/image11.jpg'
import { Div, Img } from './LatestEventsElements';

export const LatestEvent = () => {
  return <div>
      <h1>Latest Events</h1>
      <hr/>
      <Div>
          <Img src={img11} height={100} width={100} alt=""/>
          <h2>Latest Events Heading</h2>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting
            industry</p>
      </Div>
  </div>
};
