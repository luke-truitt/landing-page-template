import { lazy } from "react";
import { Row, Col } from "antd";
import { withTranslation } from "react-i18next";
import Fade from "react-reveal/Fade";
import Onboarding from "../../lib";
import * as S from "./styles";

const CustomComponent = ({ disable, setButtonState, setOnSubmit, ...props }) => {

  setOnSubmit(() => {
    console.log('Custom component action completed');
  });
  
  return (
    <div>
      <p>I'm a custom CustomComponent with id {props.id}</p>
      <button onClick={() => setButtonState(!disable)}>Toggle button</button>
    </div>
  )
}
const ShortBlock = ({ title, content, t }) => {
  const scrollTo = (id) => {
    const element = document.getElementById(id);
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
          title: 'Welcome to the platform',
          description: 'Navigate around the UI to start using it',
        },
        {
          title: 'Add your profile details',
          description: 'We use this information in order to tailor your experience',
        },
        {
          title: 'Who are you?',
          description: 'Help the community identify you',
          type: 'form',
          fields: [
            {
              label: 'First Name',
              name: 'first_name',
              type: 'text',
              placeholder: 'John',
              validation: '[a-zA-Z]',
              value: 'John'
            },
            {
              label: 'Last Name',
              name: 'last_name',
              type: 'text',
              placeholder: 'Doe',
              validation: '',
              value: 'Doe'
            },
          ],
          onSubmit: submitName
        },
        {
          type: 'component',
          component: CustomComponent,
          props: {
            id: 100,
          }
        }
      ],
      overlayClose: false
    };
    Onboarding(config);
  }
  return (
    <S.ShortBlock>
      <Row type="flex" justify="center" align="middle">
        <Fade bottom>
          <S.ContentWrapper>
            <Col lg={24} md={24} sm={24} xs={24}>
              <S.Title>{t(title)}</S.Title>
              <S.Content>{t(content)}</S.Content>
              <Row type="flex" justify="center" align="middle">
                <S.IOSButton onClick={showOnboarding}>Start Now &rsaquo;</S.IOSButton>
              </Row>
            </Col>
          </S.ContentWrapper>
        </Fade>
      </Row>
    </S.ShortBlock>
  );
};

export default withTranslation()(ShortBlock);
