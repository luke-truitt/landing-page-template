import { lazy } from "react";
import { Row, Col } from "antd";
import { withTranslation } from "react-i18next";
import Fade from "react-reveal/Fade";

import * as S from "./styles";

const MiddleBlock = ({ title, content, subtext, t }) => {
  const scrollTo = (id) => {
    const element = document.getElementById(id);
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
                <S.IOSButton href="/hello">Learn More &rsaquo;</S.IOSButton>
                <S.IOSButton href="/iced-out">Apply &rsaquo;</S.IOSButton>
              </Row>
              <Row type="flex" justify="center" align="middle">
                <img src="/img/png/iphone_home.png" alt="get some money"/>
              </Row>
            </Col>
          </S.ContentWrapper>
        </Fade>
      </Row>
    </S.MiddleBlock>
  );
};

export default withTranslation()(MiddleBlock);
