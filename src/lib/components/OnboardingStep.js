import React, { useState } from "react";
import { removeContainerElement } from "../utils/removeContainer";
import ProgressBar from "@ramonak/react-progress-bar";

export const OnboardingStep = ({
  step,
  isActive,
  displayNext,
  goToPreviousStep,
  goToNextStep,
  displayFinish,
}) => {
  const keyDown = (e) => {
    var code = e.keyCode || e.which;
    if (code === 13 || code === 32 || code === 39) {
      //13 is the enter keycode
      goToNextStep();
    } else if (code === 37) {
      goToPreviousStep();
    } else if (code === 27) {
      removeContainerElement();
    }
  };

  const validateFields = () => {
    return !step.fields.reduce((valid, field) => {
      if (!field.validation) {
        return valid & true;
      }
      return valid & RegExp(field.validation, "gm").test(field.value);
    }, true);
  };

  let defaultButtonState = false,
    onSubmitCallback = () => {
      // This function will be replaced by a custom function
    };
  if (step.type === "form") {
    defaultButtonState = step.fields.length === 0 ? false : validateFields();
  } else if (step.type === "component") {
    defaultButtonState = true;
  }

  const [form, setForm] = useState(
    Object.assign(
      {},
      {
        invalid: defaultButtonState,
      },
      ...step.fields.map((field) => ({ [field.name]: field.value || "" }))
    )
  );

  if (!isActive) return null;

  let buttonText, buttonFunction;
  if (displayFinish) {
    buttonText = "Finish";
    buttonFunction = removeContainerElement;
  } else if (displayNext) {
    buttonText = "Next";
    buttonFunction = goToNextStep;
  }
  if (step.type === "form" && step.onSubmit) {
    const defaultButtonFunction = buttonFunction;
    buttonFunction = () => {
      if (form.invalid) {
        return;
      }
      const { invalid, ...formData } = form;
      step.onSubmit(formData);
      defaultButtonFunction();
    };
  } else if (step.type === "component") {
    const defaultButtonFunction = buttonFunction;
    buttonFunction = () => {
      if (onSubmitCallback) {
        onSubmitCallback();
      }
      defaultButtonFunction();
    };
  }

  const validateForm = (name, value) => {
    const validation = step.fields.reduce((data, field) => {
      if (!field.validation) {
        return data & true;
      }
      if (field.name === name) {
        return data & RegExp(field.validation, "gm").test(value);
      }
      return data & RegExp(field.validation, "gm").test(form[field.name]);
    }, true);
    // Valid
    return !validation;
  };

  let updateForm;
  if (step.type === "form") {
    updateForm = (event) => {
      const { name, value } = event.target;
      setForm({
        ...form,
        [name]: value,
        invalid: validateForm(name, value),
      });
    };
  }

  const setButtonState = (state) => {
    setForm({
      ...form,
      invalid: state,
    });
  };

  let CustomComponent = null;
  if (step.type === "component" && step.component) {
    CustomComponent = step.component;
  }

  const setOnSubmit = (onSubmit) => {
    onSubmitCallback = onSubmit;
  };

  return (
    <div className="rop-step" onKeyDown={keyDown} tabIndex="-1">
      <div
        style={{
          width: "25%",
          marginRight: "60%",
          marginTop: "40px",
          marginBottom: "40px",
        }}
      >
        <ProgressBar
          completed={step.progress}
          bgcolor={"#000000AA"}
          labelSize={"0px"}
        />
      </div>
      {step.title && <div className="rop-title">{step.title}</div>}
      {step.description && (
        <div className="rop-description">{step.description}</div>
      )}
      {step.type === "form" && (
        <form className="rop-form">
          {step.fields.map((field, index) => (
            <div
              className="rop-input-container"
              onKeyDown={keyDown}
              key={field.name + index}
            >
              {field.label && (
                <label className="rop-input-label" htmlFor={field.name}>
                  {field.label}
                </label>
              )}
              <input
                className="rop-input"
                type={field.type}
                name={field.name}
                autoFocus={field.first}
                placeholder={field.placeholder}
                onChange={updateForm}
                value={form[field.name]}
              />
            </div>
          ))}
        </form>
      )}
      {step.type === "singleselect" && (
        <div class="rop-singleselect-container">
          {step.options.map((option, index) => (
            <div className="rop-singleselect-button-container">
              <button className="rop-singleselect-button">{option}</button>
            </div>
          ))}
        </div>
      )}
      {CustomComponent && (
        <CustomComponent
          disable={form.invalid}
          setButtonState={setButtonState}
          setOnSubmit={setOnSubmit}
          {...step.props}
        />
      )}
      <div className="rop-button-container">
        <button
          className="rop-button"
          onClick={buttonFunction}
          disabled={form.invalid}
        >
          {buttonText}
        </button>
      </div>
    </div>
  );
};
