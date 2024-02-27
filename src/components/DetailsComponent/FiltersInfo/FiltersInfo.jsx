/* eslint-disable react/prop-types */

import styled from 'styled-components';

const TextStyled = styled.p`
  display: flex;
  justify-content: space-between;
  border-bottom: dotted;
  font-size: var(--fs-md);
  font-weight: var(--fw-bold);
  margin-top: 10px;
`;

const FiltersInfo = ({ data }) => {
  const uniqueValues = {};

  data.forEach(item => {
    if (!uniqueValues[item.name]) {
      uniqueValues[item.name] = [item.value];
    } else {
      uniqueValues[item.name].push(item.value);
    }
  });

  const result = Object.keys(uniqueValues).map(name => ({
    name,
    value: uniqueValues[name],
  }));

  return (
    <div>
      {result.map(item => (
        <TextStyled key={item.name}>
          {item.name}
          <span>({item.value.join(', ')})</span>
        </TextStyled>
      ))}
    </div>
  );
};

export default FiltersInfo;
