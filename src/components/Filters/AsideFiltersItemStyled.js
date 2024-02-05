import styled from 'styled-components';

export const AsideFiltersListWrap = styled.div`
  display: flex;
  flex-direction: column;

  gap: 20px;
`;

export const FiltersItemWrap = styled.li`
  width: 100%;
  padding: 15px 20px;

  border-radius: var(--b-radius-sm);

  background-color: hsl(0deg 7.6% 81.25% / 38%);
  box-shadow: var(--shadow);

  &:not(:first-child) {
    margin-top: 10px;
  }
`;

export const CheckboxItem = styled.li`
  cursor: pointer;
  margin-top: 5px;

  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);

  & > span {
    float: right;
    padding: 2px 6px;
    border-radius: 20px;

    background-color: hsl(0deg 7.6% 81.25% / 38%);

    font-size: 12px;
  }

  & > label,
  & > input {
    cursor: pointer;
  }

  &:hover {
    transform: scale(1.1);
    box-shadow: var(--shadow);
    border-radius: var(--b-radius-sm);
  }
`;
