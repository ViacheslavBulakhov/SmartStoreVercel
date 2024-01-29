import styled from "styled-components";

export const FiltersBoxWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  gap: 20px;

  @media (min-width: 767px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`;
