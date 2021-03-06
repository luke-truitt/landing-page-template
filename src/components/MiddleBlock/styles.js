import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const MiddleBlock = styled.section`
  position: relative;
  padding: 7.5rem 0 0 0;
  text-align: center;
  display: flex;
  justify-content: center;
  background-color: #C9D1DB;
  @media screen and (max-width: 768px) {
    padding: 5.5rem 0 0 0;
  }
`;

export const Content = styled.p`
  color: #1D1D1F;
  font-family: -apple-system, BlinkMacSystemFont, sans-serif;
  font-size: 21pt;
  font-weight: 350;
  @media screen and (max-width: 712px) {
    font-size: 16pt;
  }
`;
export const Title = styled.h6`
  color: #1D1D1F;
  margin-top: 15%;
  font-weight: bold;
  font-size: 75pt;
  font-family: -apple-system, BlinkMacSystemFont, sans-serif;
  @media only screen and (max-width: 414px) {
    font-size: 40pt;
  }
`;
export const SubText = styled.p`
  color: #86868B;
  font-size: 14pt;
  width: 85%;
  text-align: center;
  font-family: -apple-system, BlinkMacSystemFont, sans-serif;
  @media screen and (max-width: 712px) {
    font-size: 10pt;
    width: 80%;
  }
`;
export const Image = styled.div`
@media screen and (max-width: 712px) {
  display: none;
}
`;
export const IOSButton = styled.a`
  width: 20%;
  text-align: center;
  font-family: -apple-system, BlinkMacSystemFont, sans-serif;
  color: #2C72DB;
  font-size: 14pt;
  :visited {
    color: #2C72DB;
  }
  :hover {
    color: #448FFF;
  }
  @media screen and (max-width: 712px) {
    width: 40%;
    margin-bottom: 3rem;
  }
`;
export const IOSWrapper = styled.div`
  width: 20%;
  text-align: center;
  font-family: -apple-system, BlinkMacSystemFont, sans-serif;
  color: #2C72DB;
  font-size: 14pt;
  a:visited {
    color: #2C72DB;
  }
  a:hover {
    color: #448FFF;
  }
  @media screen and (max-width: 712px) {
    width: 40%;
    margin-bottom: 3rem;
  }
`;
export const ContentWrapper = styled.div`
  max-width: 570px;

  @media only screen and (max-width: 768px) {
    max-width: 100%;
  }
`;

export const Iphone = styled.div`
  background-image: url('/img/svg/path_5.svg');
  width: 800px;
  hieght: 800px;
  @media only screen and (max-width: 768px) {
    max-width: 100%;
  }
`;
