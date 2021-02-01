import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const ShortBlock = styled.section`
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
`;
export const Title = styled.h6`
  color: #FFFFFF;
  font-size: 45pt;
  line-height: 1;
  margin-bottom: 0.3em;
  font-family: -apple-system, BlinkMacSystemFont, sans-serif;
`;
export const SubText = styled.p`
  color: #86868B;
  font-size: 14pt;
  width: 85%;
  text-align: center;
  font-family: -apple-system, BlinkMacSystemFont, sans-serif;
`;

export const IOSButton = styled.a`
  width: 20%;
  text-align: center;
  font-family: -apple-system, BlinkMacSystemFont, sans-serif;
  color: #2C72DB;
  font-size: 14pt;
`;

export const ContentWrapper = styled.div`
  max-width: 570px;

  @media only screen and (max-width: 768px) {
    max-width: 100%;
  }
`;
