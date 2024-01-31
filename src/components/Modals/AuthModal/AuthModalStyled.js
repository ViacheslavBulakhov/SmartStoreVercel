import styled from "styled-components";

export const AuthModalWrap = styled.div`
  max-width: 440px;
  height: auto;
  width: 440px;
  height: auto;
  background-color: var(--colors-bg);

  border-radius: 20px;
`;

export const AuthTitleWrap = styled.div`
  border-radius: 20px 20px 0 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 23px;

  padding: 20px;
  background-color: var(--colors-ui-base);

  @media screen and (min-width: 1512px) {
  }
`;
export const Form = styled.form`
  padding: 20px;
  & > div:not(:first-child) {
    margin-top: 10px;
  }
`;

export const InputWrap = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Label = styled.label``;
export const Input = styled.input`
  height: 40px;
  padding-left: 12px;
  padding-right: 12px;
  border: 1px solid #d2d2d2;
  border-radius: 8px;
  &:focus {
    outline: none;
  }
`;
export const SubmitFormBtn = styled.button`
  height: 40px;
  width: 100%;
  border: none;
  font-size: var(--fs-bold);
  border-radius: 20px;
  margin-top: 20px;

  color: var(--color-text);
  background-color: var(--accent-color);
  color: hsl(0, 0%, 100%);
  cursor: pointer;
`;
