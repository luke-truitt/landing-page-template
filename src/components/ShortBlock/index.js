import { lazy, useEffect } from "react";
import { Row, Col } from "antd";
import { withTranslation } from "react-i18next";
import Fade from "react-reveal/Fade";
import * as S from "./styles";


const ShortBlock = ({ title, content, t }) => {
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
              <S.IOSWrapper><a className="typeform-share link" href="https://form.typeform.com/to/HlbWvge2?typeform-medium=embed-snippet" style={{width: "20%",
  textAlign: "center",
  fontFamily: "-apple-system, BlinkMacSystemFont, sans-serif", color: "#2C72DB",
  fontSize: "14pt", marginLeft:"auto", marginRight: "Auto"}}  data-mode="popup" data-size="50" data-open="exit" data-open-value="50" target="_blank">Start Here &rsaquo;</a></S.IOSWrapper>
              </Row>
            </Col>
          </S.ContentWrapper>
        </Fade>
      </Row>
    </S.ShortBlock>
  );
};

export default withTranslation()(ShortBlock);
