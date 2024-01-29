import styled from "styled-components";

export const CategoriesList = styled.ul`
  display: flex;
  gap: 20px;
  justify-content: center;

  margin-top: 10px;
  font-size: var(--fs-sm);
  font-weight: var(--fw-bold);
  & > div > li {
    display: flex;
    align-items: center;
    justify-content: center;
    min-width: 100px;
    height: 70px;
    border: 1px solid var(--accent-color);
    border-radius: 20px;
    cursor: pointer;
  }
`;

export const CategoriesItem = styled.li`
  cursor: pointer;
  font-size: var(--fs-md);
  font-weight: var(--fw-bold);
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover {
    cursor: pointer;
    color: var(--accent-color);
    text-decoration: underline;
  }
`;

export const SubСategoriesList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
