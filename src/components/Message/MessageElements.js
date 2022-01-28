import styled from "styled-components";

export const Div = styled.div`
  border: 1px solid #333;
  height: 400px;
  padding: 30px;
  margin-left: 150px;
  margin-right: 150px;
  display: flex;
  
  justify-content: space-between;
  @media screen and (max-width: 768px) {
    height: 200px;
    width: 200px;
  }
`;

export const Img = styled.img`
  height: 200px;
  width: 200px;

`;

export const P = styled.p`
  text-align: justify;
 

`;
