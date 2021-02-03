import { withTranslation } from "react-i18next";
import Fade from "react-reveal/Fade";
import { Row, Col } from "antd";
import Onboarding from "../../lib";
import * as S from "./styles";
import {useEffect } from "react";


const NextStepsBlock = () => {
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
    <S.NextStepsBlock>
      <Row type="flex" justify="center" align="middle">
        <Fade bottom>
          <S.ContentWrapper>
            <Col lg={24} md={24} sm={24} xs={24}>
              <S.Title ><a className="typeform-share link" href="https://form.typeform.com/to/HlbWvge2?typeform-medium=embed-snippet" data-mode="popup" data-size="50" data-open="exit" data-open-value="50" target="_blank">Get your money, or someone else will &rsaquo;</a></S.Title>
            </Col>
          </S.ContentWrapper>
        </Fade>
      </Row>
    </S.NextStepsBlock>
  );
};

export default withTranslation()(NextStepsBlock);
