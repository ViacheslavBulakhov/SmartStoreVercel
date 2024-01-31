import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";

import Slider from "react-slick";
import styled from "styled-components";

const IMG = styled.img`
  width: 800px;
  height: 500px;
  margin: 0 auto;
  border-radius: 20px;
`;
const SalePostImgWrap = styled.div`
  margin: 0 auto;
`;
const SliderWrap = styled.div`
  margin-top: 10px;
`;

var settings = {
  dots: true,
  fade: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplaySpeed: 2000,
  autoplay: true,
  pauseOnHover: true,
  pauseOnFocus: true,
  pauseOnDotsHover: true,
  dotsClass: "slick-dots slick-dotka",
  arrows: false,
};

export const SalesPosts = () => {
  const [imgData, setImgData] = useState([]);

  useEffect(() => {
    if (!imgData.length)
      axios
        .get("https://picsum.photos/v2/list")
        .then(({ data }) => setImgData(data));
    // eslint-disable-next-line
  }, []);
  const data = imgData.length ? imgData.slice(0, 4) : [];

  return (
    <SliderWrap>
      <Slider {...settings}>
        {data.map((item) => {
          return (
            <SalePostImgWrap key={item}>
              <IMG src={`${item.download_url}`} />
            </SalePostImgWrap>
          );
        })}
      </Slider>
    </SliderWrap>
  );
};
