import { lazy } from "react";
import { Row, Col } from "antd";
import { withTranslation } from "react-i18next";
import Fade from "react-reveal/Fade";
import Onboarding from "../../lib";
import * as S from "./styles";

const MiddleBlock = ({ title, content, subtext, t }) => {
  const scrollTo = () => {
    const element = document.getElementById("overview");
    element.scrollIntoView({
      behavior: "smooth",
    });
    
  };
  const showOnboarding = () => {
    const submitName = (formData) => {
      console.log('Name details submitted.')
      console.log(formData);
    }
    const config = {
      steps: [
        {
          title: 'Add your details',
          description: 'We use this information in order to estimate your rebate.',
        },
        {
          title: 'Who are you?',
          description: 'Just for us, don\'t worry we won\'t share:)',
          type: 'form',
          fields: [
            {
              label: 'First Name',
              name: 'first_name',
              type: 'text',
              placeholder: 'First',
              validation: '[a-zA-Z]',
              value: ''
            },
            {
              label: 'Last Name',
              name: 'last_name',
              type: 'text',
              placeholder: 'Last',
              validation: '',
              value: ''
            },
          ],
          onSubmit: submitName
        },
        {
          title: 'Who are you?',
          description: 'Just for us, don\'t worry we won\'t share:)',
          type: 'form',
          fields: [
            {
              label: 'Estimated Income Last Year',
              name: 'estimated_income',
              type: 'number',
              placeholder: '10000',
              value: ''
            },
            {
              label: 'Estimated Refund Last Year',
              name: 'refund',
              type: 'number',
              placeholder: '1000',
              validation: '',
              value: ''
            },
            {
              label: 'Refunds Galore',
              name: 'galore',
              type: 'text',
              placeholder: 'No Way!',
              validation: '',
              value: ''
            },
          ],
          onSubmit: submitName
        }
      ],
      overlayClose: false
    };
    Onboarding(config);
  }
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
                <S.IOSButton onClick={showOnboarding}>Apply &rsaquo;</S.IOSButton>
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
