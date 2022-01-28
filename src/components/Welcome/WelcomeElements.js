import styled from "styled-components";


export const Div = styled.div`
    height: 400px;
    padding: 30px;
    
  

    @media screen and (max-width: 768px){
        height: 100px;
    }
   
`;
export const P = styled.p`
  font-size: 48px;
  font-family: 'Vollkorn', serif;
  font-weight: 700;
  text-align: center;
  transition: 5s;
  animation: fadeIn 2s;

  @keyframes fadeIn {
      from{
          opacity: 0;
      }
      to{
          opacity: 1;
      }
  }

  @media screen and (max-width: 768px) {
      font-size: 16px;
  }
`;
