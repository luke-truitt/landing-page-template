import { withTranslation } from "react-i18next";
import Fade from "react-reveal/Fade";
import { Row, Col } from "antd";

import * as S from "./styles";

const NextStepsBlock = () => {
  return (
    <S.NextStepsBlock>
      <S.Background>
      <Row type="flex" justify="center" align="middle">
      <Fade left>
        <Col lg={48} md={48} sm={48} xs={48}>
        <Row type="flex" justify="center" align="middle">
          <S.Title>Calculate your eligibility with Alan &rsaquo;</S.Title>
        </Row>
        </Col>
      </Fade>
      </Row>
      </S.Background>
    </S.NextStepsBlock>
  );
};

export default withTranslation()(NextStepsBlock);
