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
