import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { useStore } from '../../../zustand/store';

const CardItemWrap = styled.li`
  // width: calc(33.33% - 20px);

  padding: 10px;

  border-radius: 5px;
  box-shadow: var(--shadow);
  overflow: hidden;

  cursor: pointer;

  background-color: hsl(243.69deg 16.79% 90.54% / 81%);
  &:hover {
    cursor: pointer;
    color: var(--accent-color);
    text-decoration: underline;
    background-color: var(--colors-bg);
  }
`;

const CardLink = styled(NavLink)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;

const NamedGoodsList = () => {
  const data = useStore(state => state.goods);
  return (
    <ul
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: '20px',
        alignContent: 'flex-start',
      }}
    >
      {data.map(item => (
        <CardItemWrap key={item._id}>
          <article>
            <CardLink
              to={`/goods/${item.categories}/${item.brand}/${item.model}`}
              style={{}}
            >
              <img src={item.imgUrl} alt="" width="100px" height="100px" />
              <h3>{`${item.categories} ${item.brand}`}</h3>
              <h4>{item.model}</h4>
            </CardLink>
          </article>
        </CardItemWrap>
      ))}
    </ul>
  );
};

export default NamedGoodsList;
