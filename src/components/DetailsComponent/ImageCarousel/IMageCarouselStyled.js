import styled from 'styled-components';

export const MainImg = styled.div`
  width: 100%;
  height: 580px;
  background-image: url(${({ $url }) => $url});
  background-size: contain;
  background-repeat: no-repeat;
`;

export const ExtraPhotosList = styled.ul`
  display: flex;
  gap: 20px;
  padding: 10px 20px;
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
