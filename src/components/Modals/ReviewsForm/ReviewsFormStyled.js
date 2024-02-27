import styled from 'styled-components';

export const ReviewsFormWrap = styled.div`
  background-color: var(--colors-bg);
  border-radius: 20px;
  width: 70vw;
  max-height: 80vh;
  overflow: hidden;
`;

export const ReviewsHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  box-shadow: var(--shadow);
  padding: 10px;
`;

export const ReviewsBoxes = styled.div`
  display: flex;
  padding: 20px 0;
  & > div {
    width: 50%;
  }
`;

export const ReviewImgBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  gap: 10px;

  font-size: var(--fs-md);
  font-weight: var(--fw-bold);
  padding: 0 20px;
`;

export const RatingWrap = styled.div`
  display: flex;
  gap: 20px;
  & > div > svg {
    cursor: pointer;
    &:hover {
      scale: 1.1;
    }
  }
`;
