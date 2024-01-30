import styled from "styled-components";

export const DropdownContainer = styled.li`
  position: relative;

  display: flex;
  align-items: center;
  justify-content: center;

  min-width: 100px;
  height: 70px;

  padding: 0 10px;

  border: 1px solid var(--colors-text);
  border-radius: 20px;

  cursor: pointer;

  &:hover {
    border-color: var(--accent-color);
  }

  &:hover {
    .dropdown-content {
      display: block;
    }
  }
`;

export const DropdownTitle = styled.p`
  color: var(--color-text);
  font-size: var(--fs-bold);
  cursor: pointer;
`;

export const DropdownContent = styled.ul`
  position: absolute;

  top: 102%;
  left: 0;

  border-radius: 5px;

  background-color: var(--bg-colors);
  min-width: 160px;
  box-shadow: var(--shadow);
  z-index: 1;
`;

export const DropdownLink = styled.li`
  color: var(--color-text);
  padding: 12px 16px;

  border-radius: 5px;
  position: relative;

  &:hover {
    background-color: hsl(0deg 7.6% 81.25% / 38%);
    color: var(--color-text);

    .nested-dropdown-content {
      display: flex;
    }
  }
`;
