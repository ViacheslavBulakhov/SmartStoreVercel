import { CheckboxItem, FiltersItemWrap } from './AsideFiltersItemStyled';

const testArr = [
  'CaseTify',
  'Tpu',
  'Article',
  'black',
  'white',
  'blue',
  'yellow',
  'brown',
];

const AsideFiltersItem = ({ name }) => {
  const handleCheckboxChange = (item, checked) => {
    console.log(
      `Checkbox "${item} ${name}" is ${checked ? 'checked' : 'unchecked'}`
    );
  };

  return (
    <FiltersItemWrap>
      <h3>{name}</h3>
      <ul>
        {testArr.map(item => (
          <CheckboxItem key={item}>
            <input
              type="checkbox"
              id={`${item}${name}`}
              onChange={e => handleCheckboxChange(item, e.target.checked)}
            />
            <label htmlFor={`${item}${name}`}>{`${item} ${name} `}</label>
            <span>{Math.floor(Math.random() * 101)}</span>
          </CheckboxItem>
        ))}
      </ul>
    </FiltersItemWrap>
  );
};

export default AsideFiltersItem;
