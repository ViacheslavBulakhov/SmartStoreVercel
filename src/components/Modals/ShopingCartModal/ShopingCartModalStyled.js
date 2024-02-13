import styled from 'styled-components';

export const ShopingModalWrap = styled.div`
  background-color: var(--colors-bg);
  border-radius: 20px;
`;

export const ShopingBox = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  & > ul {
    max-height: 300px;
    overflow-y: auto;
  }

  & > div:first-child {
    display: flex;
    flex-direction: column;
    align-items: center;

    gap: 20px;
    & > p > span {
      font-weight: var(--fw-bold);
    }
  }
`;

export const ShopingCardWrap = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 10px;

  padding: 8px;

  box-shadow: var(--shadow);

  & > div:last-child {
    cursor: pointer;
    &:hover {
      scale: 1.05;
    }
  }
`;
export const ImgCardWrap = styled.div`
  width: 100px;
  height: 100px;
`;

export const CountWrap = styled.div`
  width: 120px;

  padding: 6px 8px;

  display: flex;
  gap: 10px;

  background-color: #dee2e6;
  border-radius: var(--b-radius-sm);

  & > span {
    font-weight: var(--fw-bold);
    font-size: var(--fs-md);
    cursor: pointer;
    color: black;
  }

  & > input {
    width: 70%;
    height: 90%;

    border: none;
    border-radius: var(--b-radius-sm);

    color: var(--colors-text);
    font-size: var(--fs-sm);
    font-weight: var(--fw-bold);
    text-align: center;

    background-color: var(--colors-bg);
  }
`;

export const BaseInfoWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  & > span {
    font-size: var(--fs-sm);
    font-weight: var(--fw-bold);
  }
`;

export const BtnWrap = styled.div`
  display: flex;
  justify-content: space-around;

  & > button {
    height: 40px;
    width: 40%;
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
  }
`;
