import styled from 'styled-components';

export const ImageCarouselWrap = styled.div`
  padding-top: 10px;

  & > div {
    position: relative;
    & > button {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);

      display: grid;
      place-items: center;

      width: 32px;
      height: 32px;

      border-radius: 50%;
      border: 1px solid rgba(0, 0, 0, 1);

      z-index: 1;

      background-color: inherit;

      cursor: pointer;
    }
  }

  @media (min-width: 768px) {
    position: sticky;
    top: 0;

    width: 50%;
    height: fit-content;
    box-shadow: var(--shadow);
    border: var(--border-base);
    border-radius: 20px;
    padding: 10px;
  }
`;

export const MainImg = styled.div`
  width: 100%;
  height: 300px;

  background-image: url(${({ $url }) => $url});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  border-radius: 20px;

  @media (min-width: 768px) {
    height: 580px;
  }
`;

// export const ExtraPhotosList = styled.ul`
//   display: flex;
//   flex-wrap: wrap;
//   gap: 20px;
//   padding: 10px 20px;
// `;
export const ExtraPhotosList = styled.ul`
  display: flex;
  flex-wrap: nowrap; /* Змінив flex-wrap на nowrap, щоб фотографії відображалися в одному рядку */
  gap: 20px;
  padding: 10px 20px;
  overflow-x: auto; /* Додаю прокрутку по горизонталі */
  white-space: nowrap; /* Щоб рядок не переносився */
`;

export const ExtraPhotoItem = styled.li`
  width: 90px;
  height: 90px;
  border: var(--border-base);
  border-radius: 20px;

  background-image: url(${({ $url }) => $url});
  background-size: cover;
  border-color: ${({ $isActive }) =>
    $isActive ? 'var(--accent-color)' : '#e5e5e5'};

  cursor: pointer;
`;
