import { lazy } from "react";
import { Row, Col } from "antd";
import { withTranslation } from "react-i18next";
import Fade from "react-reveal/Fade";

import * as S from "./styles";

const ShortBlock = ({ title, content, t }) => {
  const scrollTo = (id) => {
    const element = document.getElementById(id);
    element.scrollIntoView({
      behavior: "smooth",
    });
  };
  return (
    <S.ShortBlock>
      <Row type="flex" justify="center" align="middle">
        <Fade bottom>
          <S.ContentWrapper>
            <Col lg={24} md={24} sm={24} xs={24}>
              <S.Title>{t(title)}</S.Title>
              <S.Content>{t(content)}</S.Content>
              <Row type="flex" justify="center" align="middle">
                <S.IOSButton>Start Now &rsaquo;</S.IOSButton>
              </Row>
            </Col>
          </S.ContentWrapper>
        </Fade>
      </Row>
    </S.ShortBlock>
  );
};

export default withTranslation()(ShortBlock);
