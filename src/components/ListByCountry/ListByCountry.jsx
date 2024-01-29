import Card from "./Card/Card";
import { ListWrap } from "./ListByCountryStyled";

// eslint-disable-next-line react/prop-types
const ListByCountry = ({ data = [] }) => {
  return (
    <ListWrap>
      {data.map((item) => {
        return <Card key={item.name.common} item={item} />;
      })}
    </ListWrap>
  );
};

export default ListByCountry;
