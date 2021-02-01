import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  background-color: #C9D1DB;
  width: 100%;
  padding: ${(props) => (props.padding ? "2.8rem" : "0 0")};
  overflow: hidden;
  border-top: ${(props) => (props.border ? "1px solid #CDD1D4" : "")};

  @media only screen and (max-width: 1024px) {
    max-width: 950px;
  }

  @media only screen and (max-width: 768px) {
    max-width: 700px;
  }

  @media only screen and (max-width: 414px) {
    max-width: 370px;
  }
`;
