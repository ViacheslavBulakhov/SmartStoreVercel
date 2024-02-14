import styled from 'styled-components';

export const FavoriteCardWrap = styled.div`
  display: flex;
  justify-content: space-between;

  padding: 20px;
  max-width: 70vw;

  box-shadow: var(--shadow);

  font-size: var(--fs-md);
`;

export const FavoriteCardDescriptionWrap = styled.div`
  display: flex;
  gap: 10px;
`;

export const FavoriteCardDescription = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const AmountWrap = styled.div`
  & > p > span {
    font-weight: var(--fw-bold);
    margin-left: 10px;
    &:first-child {
      font-weight: var(--fw-normal);
      text-decoration: line-through;
      filter: invert(40%);
    }
  }
`;

export const ActionBtnWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-end;
  & > svg {
    cursor: pointer;
    &:hover {
      scale: 1.03;
    }
  }
`;

export const BuyBtn = styled.button`
  padding: 6px 10px;
  border: none;
  font-size: var(--fs-bold);
  font-weight: var(--fw-normal);
  border-radius: 20px;

  color: var(--color-text);
  background-color: #1365a6;
  color: hsl(0, 0%, 100%);
  cursor: pointer;

  &:hover {
    scale: 1.03;
  }
`;
