import styled from 'styled-components';

export const NextStepsBlock = styled.section`
  position: relative;
  display: flex;
  width:100%;
  margin-left: auto;
  margin-right: auto;
  background-color: #FFFFFF;
  hieght: 100%;
  justify-content: center;
`;

export const Background = styled.div`
background-image: url('/img/png/background.png');
height: 400px;
width: 100%;
@media screen and (max-width: 768px) {
  background-image: url('/img/png/lower_3.png');
  width: 270px;
}
`;
export const Title = styled.h6`
font-family: -apple-system, BlinkMacSystemFont, sans-serif;
font-size: 40pt;
margin-left: auto;
color: #2C72DB;
margin-right: auto;
margin-top: 25%;
width: 400px;
font-weight: bold;
@media screen and (max-width: 712px) {
  font-size: 30pt;
  width: 80%
  font-family: -apple-system, BlinkMacSystemFont, sans-serif;
}
a {
  color: #2C72DB;
  font-family: -apple-system, BlinkMacSystemFont, sans-serif;
}
a:visited {
  color: #2C72DB;
  font-family: -apple-system, BlinkMacSystemFont, sans-serif;
}
a:hover {
  color: #448FFF;
  font-family: -apple-system, BlinkMacSystemFont, sans-serif;
}
`;