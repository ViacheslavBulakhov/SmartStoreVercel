/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom";
import {
  CardBody,
  CardTitle,
  CardWrap,
  DescriptionList,
  Img,
} from "./CardStyled";

const Card = ({ item: { name, capital = [], flags, population, region } }) => {
  const navigate = useNavigate();

  const isCapital =
    capital.length > 0
      ? ` ${capital.join(", ")}`
      : ` ${name.common} does not have a capital.`;

  const localePopulation = ` ${population.toLocaleString()}`;

  return (
    <CardWrap onClick={() => navigate(`country/${name.common}`)}>
      <Img src={flags.png} alt={flags.alt} />
      <CardBody>
        <CardTitle>{name.common}</CardTitle>
        <DescriptionList>
          <p>
            Population:
            <span>{localePopulation}</span>
          </p>
          <p>
            Region:
            <span>{` ${region}`}</span>
          </p>
          <p>
            Capital:
            <span>{isCapital}</span>
          </p>
        </DescriptionList>
      </CardBody>
    </CardWrap>
  );
};

export default Card;
