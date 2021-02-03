import { lazy, useEffect } from "react";
import { Row, Col } from "antd";
import { withTranslation } from "react-i18next";
import Fade from "react-reveal/Fade";
import Onboarding from "../../lib";
import * as S from "./styles";

const MiddleBlock = ({ title, content, subtext, t }) => {
  
  useEffect(() => {
    const script = document.createElement('script');
    script.id = "typef_orm_share"
    script.src = "https://embed.typeform.com/embed.js";
    script.async = true;
    document.body.appendChild(script);
  
    return () => {
      document.body.removeChild(script);
    }
  }, []);
  
  const scrollTo = () => {
    const element = document.getElementById("overview");
    element.scrollIntoView({
      behavior: "smooth",
    });
    
  };
  
  return (
    <S.MiddleBlock>
      <Row type="flex" justify="center" align="middle">
        <Fade bottom>
          <S.ContentWrapper>
            <Col lg={24} md={24} sm={24} xs={24}>
              <S.Title>{t(title)}</S.Title>
              <S.Content>{t(content)}</S.Content>
              <Row type="flex" justify="center" align="middle">
                <S.SubText>The first tax software designed for students. We maximize your refund, <u>and</u> make sure you understand it.</S.SubText>
              </Row>
              <Row type="flex" justify="center" align="middle">
                <S.IOSButton onClick={scrollTo}>Learn More &rsaquo;</S.IOSButton>
                <S.IOSWrapper><a className="typeform-share link" href="https://form.typeform.com/to/HlbWvge2?typeform-medium=embed-snippet" style={{width: "20%",
  textAlign: "center",
  fontFamily: "-apple-system, BlinkMacSystemFont, sans-serif", color: "#2C72DB",
  fontSize: "14pt"}} data-mode="popup" data-size="50" data-open="exit" data-open-value="50" target="_blank">Apply &rsaquo;</a></S.IOSWrapper>
              </Row>
              <Row type="flex" justify="center" align="middle">
                <S.Image><img src='/img/svg/iphone_home.svg'></img></S.Image>
              </Row>
            </Col>
          </S.ContentWrapper>
        </Fade>
      </Row>
      </S.MiddleBlock>
  );
};

export default withTranslation()(MiddleBlock);
