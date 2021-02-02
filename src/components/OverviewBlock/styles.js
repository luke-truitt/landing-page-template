import styled from 'styled-components';

export const OverviewBlock = styled.section`
  position: relative;
  padding: 3rem 0 3rem;
  display: flex;
  justify-content: center;
  background-color: #FFFFFF;
  @media screen and (max-width: 768px) {
    padding: 5.5rem 0 3rem;
  }
  
`;

export const Card = styled.div`
  width: 270px;
  height: 427px;
  margin-left: 0.5vw;
  margin-right: 0.5vw;
  font-family: -apple-system, BlinkMacSystemFont, sans-serif;
`;
export const Content = styled.p`
  padding-left: 10%;
  padding-right: 10%;
  margin-top: 1.5rem;
  margin-left: auto;
  margin-right: auto;
  font-size: 10pt;
  width: 90%;
  line-height: 1.25em;
  font-family: -apple-system, BlinkMacSystemFont, sans-serif;
`;
export const Calculation = styled.p`
  margin-top: 4rem;
  padding-left: 10%;
  padding-right: 10%;
  color: #2C72DB;
  font-size: 20pt;
  text-align: left;
  font-weight: bold;
  line-height: 1.3em;
  a:visited {
    color: #2C72DB;
    font-family: -apple-system, BlinkMacSystemFont, sans-serif;
  }
  a:hover {
    color: #448FFF;
    font-family: -apple-system, BlinkMacSystemFont, sans-serif;
  }
  a {
    color: #2C72DB;
    font-family: -apple-system, BlinkMacSystemFont, sans-serif;
  }
  font-family: -apple-system, BlinkMacSystemFont, sans-serif;
`;
export const Container = styled.div`
  position: relative;
  max-width: 700px;
  font-family: -apple-system, BlinkMacSystemFont, sans-serif;
`;

export const TextWrapper = styled.div`
  border-radius: 3rem;
  max-width: 400px;
`;

export const Title = styled.h6`
font-family: -apple-system, BlinkMacSystemFont, sans-serif;
font-size: 40pt;
margin-left: auto;
margin-right: auto;
text-align: center;
@media screen and (max-width: 712px) {
  font-size: 30pt;
  width: 80%
}
`;