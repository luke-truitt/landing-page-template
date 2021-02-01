import { withTranslation } from "react-i18next";
import Fade from "react-reveal/Fade";
import { Row, Col } from "antd";

import * as S from "./styles";

const OverviewBlock = () => {
  return (
    <S.OverviewBlock>
      
      <Row type="flex" justify="center" align="middle">
      <Fade left>
        <Col lg={48} md={48} sm={48} xs={48}>
        <Row type="flex" justify="center" align="middle">
          <S.Title>How does it work?</S.Title>
        </Row>
        <Row type="flex" justify="center" align="middle">
        <S.Card style={{backgroundImage: "url('/img/png/path_1.png')"}}>
       
          <S.Content style={{marginTop: "50%"}}><b>Most employers keep how much they <u>think</u> you’ll owe in taxes.</b>  This amount is often an overestimate.</S.Content>
        
        </S.Card>
        <S.Card style={{backgroundImage: "url('/img/png/path_2.png')"}}>
          <S.Content style={{marginTop: "50%"}}><b>Spring is tax season.</b> This is when Americans request some of that money back.</S.Content>
        </S.Card>
        <S.Card style={{backgroundImage: "url('/img/png/path_3.png')"}}>
          <S.Content style={{marginTop: "50%"}}><b>Students qualify for unique refunds because of college expenses and internships.</b></S.Content><S.Calculation>Calculate your eligibility with Alan &rsaquo;</S.Calculation>
        </S.Card>
        <S.Card style={{backgroundImage: "url('/img/png/path_4.png')"}}>
          <S.Content style={{marginTop: "50%"}}> <b>Afterwards, we’ll help you file your taxes to maximize your refund.</b> <u>We’ll explain every dollar of your expected refund.</u></S.Content>
        </S.Card>
        <S.Card style={{backgroundImage: "url('/img/png/path_5.png')"}}>
          <S.Content style={{marginTop: "50%"}}> <b>Your refund will be ready within 1 month on average.</b> We’ll give you as much as <u>$1000 next week</u> when you deposit the rest into a low-risk investment account.</S.Content>
        </S.Card>
        </Row>
        
        </Col>
      </Fade>
      </Row>
    </S.OverviewBlock>
  );
};

export default withTranslation()(OverviewBlock);
