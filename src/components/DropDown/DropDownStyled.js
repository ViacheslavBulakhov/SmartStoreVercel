import styled from 'styled-components';

export const DropdownContainer = styled.li`
  position: relative;

  display: flex;
  align-items: center;
  justify-content: center;

  min-width: 70px;
  height: 70px;

  padding: 0 8px;

  border: 1px solid var(--colors-text);
  border-radius: 20px;

  cursor: pointer;

  &:hover {
    border-color: var(--accent-color);
  }

  & > svg {
    transform: rotate(0deg);
    transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);
    transition: transform 700ms cubic-bezier(0.4, 0, 0.2, 1);
  }

  &:hover {
    .dropdown-content {
      display: block;
    }
    & > svg {
      transform: rotate(180deg);

      color: var(--accent-color);
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

  background-color: var(--colors-bg);
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
  & > a {
    white-space: nowrap;
  }
`;
