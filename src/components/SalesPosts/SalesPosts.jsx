import axios from "axios";

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

const imgData = await axios("https://picsum.photos/v2/list");
const data = [
  imgData.data[0],
  imgData.data[1],
  imgData.data[2],
  imgData.data[3],
];

export const SalesPosts = () => {
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
  };
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
