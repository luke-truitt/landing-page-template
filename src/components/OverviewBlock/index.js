import { withTranslation } from "react-i18next";
import Fade from "react-reveal/Fade";
import { Row, Col } from "antd";
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
const OverviewBlock = () => {
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
    <S.OverviewBlock id="overview">
      
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
          <S.Content style={{marginTop: "50%"}}><b>Students qualify for unique refunds because of college expenses and internships.</b></S.Content><S.Calculation><a onClick={showOnboarding}>Calculate your eligibility with Alan &rsaquo;</a></S.Calculation>
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
