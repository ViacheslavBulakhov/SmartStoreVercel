import styled from "styled-components";

export const CardWrap = styled.article`
  border-radius: var(--b-radius);
  background-color: car(--colors-ui-base);
  box-shadow: var(--shadow);
  cursor: pointer;
  overflow: hidden;
`;

export const Img = styled.img`
  display: block;
  width: 100%;
  height: 150px;
  object-fit: cover;
  object-position: center;
  box-shadow: var(--shadow);
`;

export const CardBody = styled.div`
  padding: 1rem 1.5rem 2rem;
`;

export const CardTitle = styled.h3`
  margin: 0;
  font-size: var(--fs-md);
  font-weight: var(--fw-bold);
`;

export const DescriptionList = styled.div`
  font-size: var(--fs-sm);
  line-height: 1.5;

  & > p {
    font-weight: var(--fw-normal);
    & > span {
      font-weight: var(--fw-light);
    }
  }
`;
