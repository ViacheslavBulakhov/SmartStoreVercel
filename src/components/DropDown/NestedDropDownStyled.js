import styled from "styled-components";

export const DropdownTitle = styled.p`
  color: var(--color-text);
  font-size: var(--fs-bold);
  cursor: pointer;
`;

export const NestedDropdownContent = styled.ul`
  display: none;

  position: absolute;
  top: 0;
  left: 100%;

  max-height: 300px;
  width: calc(150px * 3 + 6px);
  flex-direction: column;
  flex-wrap: wrap;
  align-items: flex-start;

  overflow-y: auto;

  border-radius: 5px;
  background-color: var(--colors-bg);
  box-shadow: var(--shadow);
  z-index: 1;
`;

export const NestedDropdownLink = styled.li`
  color: black;
  border-radius: 5px;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
  color: var(--color-text);
  &:hover {
    background-color: hsl(0deg 7.6% 81.25% / 38%);
  }
`;
