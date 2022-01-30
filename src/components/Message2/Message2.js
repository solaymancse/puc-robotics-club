import React, { useEffect } from "react";
import Aos from 'aos'
import "aos/dist/aos.css";
import {FaQuoteLeft,FaQuoteRight} from 'react-icons/fa'
import { Div, Img, P, Section } from "./Message2Elements";
import img7 from "../../images/image7.jpg";
import img9 from "../../images/image9.jpg";

export const Message2 = () => {
    useEffect(() => {
        Aos.init({ duration: 2000 });
      }, []);
  return (
    <>
      <Section>
        <Div data-aos="fade-right">
          <P><FaQuoteLeft/>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book <FaQuoteRight/>
          </P>
          <hr/>
          <Img src={img7} alt="" />
        </Div>
        <Div data-aos="fade-left">
          <P><FaQuoteLeft/>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book <FaQuoteRight/>
          </P>
          <hr/>
          <Img src={img9} alt="" />
        </Div>
      </Section>
    </>
  );
};
