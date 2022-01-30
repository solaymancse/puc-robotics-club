import React from 'react';
import { Navbar } from './components/Navbar/Navbar';
import TopCarousel from './components/TopCarousel/TopCarousel';
import { Welcome } from './components/Welcome/Welcome';
import { Message } from './components/Message/Message';
import { Message2 } from './components/Message2/Message2';
import { Events } from './components/Events/Events';
import { ExeCommittee } from './components/ExeCommittee/ExeCommittee';



export default function MainComponents() {
  return <>
      <Navbar/>
      <TopCarousel/>
      <Welcome/>
      <Message/>
      <Message2/>
      <Events/>
      <ExeCommittee/>
      
  </>;
}
