import styled from 'styled-components';

export const Wrap = styled.div`
  display: flex;
  box-shadow: var(--shadow);
`;

export const ReviewsWrap = styled.div`
  display: flex;
  align-items: center;
`;

export const TextDescription = styled.p`
  font-size: var(--fs-md);
  & > span {
    font-weight: var(--fw-bold);
  }
`;

export const ReviewsBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: var(--shadow);
  padding: 10px;
`;

export const AddReviewsBtn = styled.button`
  border: none;

  font-size: var(--fs-bold);
  text-align: center;
  padding: 20px;

  border-radius: 20px;

  background-color: #1365a6;
  color: hsl(0, 0%, 100%);
  cursor: pointer;
`;

export const CrossSpan = styled.span`
  font-size: var(--fs-sm);
  color: grey;
  text-decoration: line-through;
`;
