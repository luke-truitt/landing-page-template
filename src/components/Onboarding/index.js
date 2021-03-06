import React from "react";
import Onboarding from "../../lib";
import { withTranslation } from "react-i18next";
import Fade from "react-reveal/Fade";
import { Row, Col } from "antd";

const CustomComponent = ({
  disable,
  setButtonState,
  setOnSubmit,
  ...props
}) => {
  setOnSubmit(() => {
    console.log("Custom component action completed");
  });

  return (
    <div>
      <p>I'm a custom CustomComponent with id {props.id}</p>
      <button onClick={() => setButtonState(!disable)}>Toggle button</button>
    </div>
  );
};

const OnboardingBlock = () => {
  const showOnboarding = () => {
    const submitName = (formData) => {
      console.log("Name details submitted.");
      console.log(formData);
    };
    const config = {
      steps: [
        {
          progress: 30,
          title: "Who are you?",
          type: "form",
          fields: [
            {
              label: "First Name",
              name: "first_name",
              type: "text",
              placeholder: "Ben",
              validation: "[a-zA-Z]",
              value: "",
              first: true,
            },
            {
              label: "Last Name",
              name: "last_name",
              type: "text",
              placeholder: "Franklin",
              validation: "",
              value: "",
            },
            {
              label: "Email",
              name: "email",
              type: "email",
              placeholder: "ben@ucla.edu",
              value: "",
            },
            {
              label: "Phone Number",
              name: "phone_number",
              type: "number",
              placeholder: "88888888",
              value: "",
            },
          ],
          onSubmit: submitName,
        },
        {
          progress: 0,
          title: "How did you file taxes last year?",
          type: "singleselect",
          options: [
            "I didn't file taxes.",
            "My parents did it.",
            "TurboTax",
            "I don't know.",
          ],
        },
        {
          progress: 15,
          title: "Add your Hey fucker details",
          description:
            "We use this information in order to tailor your experience",
        },
        {
          progress: 30,
          title: "Who are you?",
          description: "Help the community identify you",
          type: "form",
          fields: [
            {
              label: "First Name",
              name: "first_name",
              type: "text",
              placeholder: "John",
              validation: "[a-zA-Z]",
              value: "",
              first: true,
            },
            {
              label: "Last Name",
              name: "last_name",
              type: "text",
              placeholder: "Doe",
              validation: "",
              value: "",
            },
          ],
          onSubmit: submitName,
        },
        {
          progress: 59,
          type: "component",
          component: CustomComponent,
          props: {
            id: 100,
          },
        },
      ],
      overlayClose: true,
    };
    Onboarding(config);
  };
  return (
    <div className="container">
      <button onClick={showOnboarding}>Show Onboarding Flow</button>
    </div>
  );
};

export default withTranslation()(OnboardingBlock);
