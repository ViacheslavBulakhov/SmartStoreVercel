import styled from "styled-components";

export const SearchInput = styled.input.attrs({
  type: "search",
  placeholder: "Search for a Country...",
})`
  margin-left: 2rem;
  border: none;
  outline: none;
  background-color: var(--colors-ui-base);
  color: var(--color-text);
`;

export const SearchInputWrap = styled.label`
  background-color: var(--colors-ui-base);
  padding: 1rem 2rem;
  display: flex;
  align-items: center;
  border-radius: var(--b-radius);
  box-shadow: var(--shadow);
  width: 100%;
  margin-bottom: 1rem;

  @media (min-width: 767px) {
    margin-bottom: 0;
    width: 280px;
  }
  cursor: text;
`;
