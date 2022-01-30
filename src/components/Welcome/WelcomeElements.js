import styled from "styled-components";




export const Div = styled.div`
   padding-left: 150px;
   padding-right: 150px;
   width: 100%;
   height: 700px;
   text-align: center;
    color: #fff;

    @media screen and (max-width: 768px){
        height: 100px;
    }
   
`;

export const Span = styled.span`
    font-size: 48px;
    letter-spacing: 3px;

`;
export const P = styled.p`
  font-size: 48px;
  font-family: 'Vollkorn', serif;
  font-weight: 700;
  text-align: center;
  z-index: 1000;
  color: #333;
  @media screen and (max-width: 768px) {
      font-size: 16px;
  }
`;
