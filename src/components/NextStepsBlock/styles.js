import styled from 'styled-components';

export const NextStepsBlock = styled.section`
  position: relative;
  padding: 7.5rem 0 3rem;
  text-align: center;
  display: flex;
  justify-content: center;
  background-color: #000000;
  @media screen and (max-width: 768px) {
    padding: 5.5rem 0 3rem;
  }
`;

export const Content = styled.p`
  color: #FFFFFF;
  font-family: -apple-system, BlinkMacSystemFont, sans-serif;
  font-size: 21pt;
  font-weight: 350;
  margin-left: auto;
  margin-right: auto;
  @media screen and (max-width: 712px) {
    font-size: 15pt;
    width: 80%
  }
`;

export const Title = styled.div`
  color: #FFFFFF;
  font-size: 45pt;
  line-height: 1.3;
  margin-top: auto;
  margin-bottom: 3.5rem;
  margin-left: auto;
  margin-right: auto;
  font-family: -apple-system, BlinkMacSystemFont, sans-serif;
  a {
    font-family: -apple-system, BlinkMacSystemFont, sans-serif;
    color: #FFFFFF;
  }
  @media screen and (max-width: 712px) {
    font-size: 25pt;
    margin-left: 1rem;
    margin-right: 1rem;
  }
`;

export const ContentWrapper = styled.div`
  max-width: 768px;

  @media only screen and (max-width: 768px) {
    max-width: 100%;
  }
`;