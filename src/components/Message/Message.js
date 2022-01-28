import React from 'react';
import { Div, Img, P } from '../Message/MessageElements';
import img6 from '../../images/image6.jpg'


export const Message = () => {
  return <>
  <Div>
      <div>
        <Img src={img6} alt="vc_sir" />
        <P>"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book." <br/>--- VC Sir</P>
      </div>
      <div>
        <P>"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book." <br/>--- VC Sir</P>
        <Img src={img6} alt="vc_sir" />
      </div>
  </Div>

  </>;
};
