import styled, { css } from "styled-components";

const subColor = "grey";
const mainColor = "black";

const shrinkLabel = css`
  top: -14px;
  font-size: 12px;
  color: ${mainColor};

  @media screen and (max-width: 800px) {
    top: -28px;
    font-size: 1.3rem;
  }
`;

export const GroupContainer = styled.div`
  position: relative;
  margin-bottom: 45px;
`;

export const Input = styled.input`
  background: none;
  background-color: white;
  color: ${subColor};
  font-size: 18px;
  padding: 10px 10px 10px 5px;
  display: block;
  width: 100%;
  border: none;
  border-radius: 0;
  border-bottom: 1px solid ${subColor};
  margin: 0;
  resize: ${({ resize }) => (resize ? resize : null)};

  &:focus {
    outline: none;
  }

  &:focus ~ .shrink-label {
    ${shrinkLabel}
  }
`;

export const Label = styled.label`
  color: ${subColor};
  font-size: 16px;
  font-weight: normal;
  position: absolute;
  pointer-events: none;
  left: 5px;
  top: 10px;
  transition: 300ms ease all;

  &.shrink-label {
    ${shrinkLabel}
  }

  @media screen and (max-width: 800px) {
    font-size: 1.2rem;
  }
`;
