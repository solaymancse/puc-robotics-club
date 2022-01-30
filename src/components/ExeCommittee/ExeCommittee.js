import React from 'react';
import { Div, Img, TopSec } from './ExeCommitteeElements';
import img8 from '../../images/image8.jpg'


export const ExeCommittee = () => {
  return <Div>

      <h1 style={{textAlign:'center'}}>Executive Committee</h1>
      <section>
          <TopSec>
              <div>
                  <Img src={img8} alt=""/>
                  <p>Mohammed Saifuddin Munna <br/>Advisor <br/> Assistant Professor, Department of EEE</p>
              </div>
              <div>
              <div>
                  <Img src={img8} alt=""/>
                  <p>Mohammed Saifuddin Munna <br/>Advisor <br/> Assistant Professor, Department of EEE</p>
              </div>
                  
              </div>
          </TopSec>    

      </section>
  </Div>;
};
