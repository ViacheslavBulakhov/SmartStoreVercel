import styled from 'styled-components';

export const Wrap = styled.div`
  display: flex;

  padding: 20px;
  gap: 20px;

  box-shadow: var(--shadow);
`;

export const DetailPageTitle = styled.h2`
  box-shadow: var(--shadow);
  border-bottom: var(--border-base);
  border-radius: var(--b-radius-sm);
  padding: 20px;
  margin-top: 20px;
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

export const DescriptionInfoWrap = styled.div`
  box-shadow: var(--shadow);
  border: var(--border-base);
  border-radius: 20px;
  padding: 20px;

  & > h4 {
    text-decoration: underline;
    margin: 10px 0;
  }
`;

export const ReviewsBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: var(--shadow);
  padding: 10px;
  border: var(--border-base);
  border-radius: 20px;
  height: 70px;
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
  &:hover {
    scale: 1.1;
  }
`;

export const CrossSpan = styled.span`
  font-size: var(--fs-sm);
  color: grey;
  text-decoration: line-through;
`;

export const ReviewsLink = styled.p`
  font-size: var(--fs-md);
  margin-left: 10px;
  cursor: pointer;
  border: var(--border-base);
  border-radius: 20px;
  padding: 10px;
  & > span {
    font-weight: var(--fw-bold);
  }

  &:hover {
    scale: 1.1;
  }
`;

export const ReviewsList = styled.ul`
  padding: 20px 0;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const ReviewsActionWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  margin-top: 20px;
  border: var(--border-base);
  border-radius: 20px;
  padding: 10px;
`;
