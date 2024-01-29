/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom";
import {
  CardBody,
  CardTitle,
  DescriptionList,
} from "../ListByCountry/Card/CardStyled";
import { InfoImage, Meta, Tag, TagGroup, Wrapper } from "./CountryInfoStyled";
import { useEffect, useState } from "react";
import axios from "axios";
import { filterByCode } from "../../config";

const CountryInfo = ({
  item: {
    name,
    capital = [],
    flags,
    population,
    region,
    subregion,
    nativeName,
    languages,
    tld,
    borders = [],
  },
}) => {
  const [neighbors, setNeighbors] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (borders.length)
      axios
        .get(filterByCode(borders))
        .then(({ data }) => setNeighbors(data.map((item) => item.name.common)));
  }, [borders]);

  const isCapital =
    capital.length > 0
      ? ` ${capital.join(", ")}`
      : ` ${name.common} does not have a capital.`;

  const localePopulation = ` ${population.toLocaleString()}`;

  return (
    <Wrapper>
      <InfoImage src={flags.png} alt={flags.alt} />
      <CardBody>
        <CardTitle>{name.common}</CardTitle>
        <DescriptionList>
          <p>
            Native Name:
            <span>{` ${nativeName.join(", ")}`}</span>
          </p>
          <p>
            Population:
            <span>{localePopulation}</span>
          </p>
          <p>
            Region:
            <span>{` ${region}`}</span>
          </p>
          <p>
            Sub Region:
            <span>{` ${subregion}`}</span>
          </p>
          <p>
            Capital:
            <span>{isCapital}</span>
          </p>

          <br />

          <p>
            Top Level Domain:
            <span>{` ${tld[0]}`}</span>
          </p>
          <p>
            Currencies:
            <span>{isCapital}</span>
          </p>
          <p>
            Languages:
            <span>{` ${languages.join(", ")}`}</span>
          </p>
        </DescriptionList>
        <Meta>
          <CardTitle>Border Countries</CardTitle>
          {!borders.length ? (
            <span>There is no border countries</span>
          ) : (
            <TagGroup>
              {neighbors.map((item) => (
                <Tag key={item} onClick={() => navigate(`/country/${item}`)}>
                  {item}
                </Tag>
              ))}
            </TagGroup>
          )}
        </Meta>
      </CardBody>
    </Wrapper>
  );
};

export default CountryInfo;
