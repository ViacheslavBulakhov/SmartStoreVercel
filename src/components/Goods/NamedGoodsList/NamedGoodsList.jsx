import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { dropArr } from '../../DropDown/DropDown';

const CardItemWrap = styled.li`
  width: calc(33.33% - 20px);

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

const NamedGoodsList = ({ name }) => {
  return (
    <ul
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: '20px',
        alignContent: 'flex-start',
      }}
    >
      {dropArr.map(item => (
        <CardItemWrap key={item}>
          <article>
            <CardLink to={`/goods/${name}/${item}`} style={{}}>
              <img
                src="https://picsum.photos/100/100"
                alt=""
                width="100px"
                height="100px"
              />
              <h3>
                {name} {item}
              </h3>
            </CardLink>
          </article>
        </CardItemWrap>
      ))}
    </ul>
  );
};

export default NamedGoodsList;
