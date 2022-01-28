import React from 'react';
import { Navbar } from './components/Navbar/Navbar';
import TopCarousel from './components/TopCarousel/TopCarousel';
import { Welcome } from './components/Welcome/Welcome';
import { Message } from './components/Message/Message';



export default function MainComponents() {
  return <>
      <Navbar/>
      <TopCarousel/>
      <Welcome/>
      <Message/>
      
  </>;
}
