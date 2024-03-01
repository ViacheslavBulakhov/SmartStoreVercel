import { useEffect } from 'react';
import { useState } from 'react';
import slideImg1 from '../../assets/photo.png';

import Slider from 'react-slick';
import styled from 'styled-components';

const IMG = styled.img`
  width: 1170px;
  height: auto;
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
  dotsClass: 'slick-dots slick-dotka',
  arrows: false,
  swipeToSlide: true,
  adaptiveHeight: true,
};

export const SalesPosts = () => {
  const [imgData, setImgData] = useState([]);

  useEffect(() => {
    if (!imgData.length) {
      fetch('https://picsum.photos/v2/list')
        .then(response => response.json())
        .then(data => setImgData(data))
        .catch(error => console.error('Error fetching data:', error));
    }
  }, [imgData]);
  const data = imgData.length ? imgData.slice(0, 4) : [];

  return (
    <SliderWrap>
      <Slider {...settings}>
        <IMG src={slideImg1} />
        {data.map(item => {
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
