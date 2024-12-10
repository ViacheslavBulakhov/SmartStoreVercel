import { checkIsNewGoods } from '../../utils';
import { useStore } from '../../zustand/store';
import GoodsCardById from '../Goods/GoodsListByNestedId/GoodsCardById';

import Carousel from 'react-multi-carousel';

import 'react-multi-carousel/lib/styles.css';

const NewGoodsBox = () => {
  const goods = useStore(state => state.goods);

  const newGoods = goods.filter(item => checkIsNewGoods(item.createdAt));

  return (
    <div>
      <Carousel
        additionalTransfrom={0}
        arrows
        autoPlaySpeed={3000}
        centerMode={false}
        className="carousel-container"
        containerClass="container-with-dots"
        dotListClass=""
        draggable
        focusOnSelect={false}
        infinite
        itemClass="carousel-item"
        keyBoardControl
        minimumTouchDrag={80}
        pauseOnHover
        renderArrowsWhenDisabled={false}
        renderButtonGroupOutside={false}
        renderDotsOutside={false}
        responsive={{
          desktop: {
            breakpoint: {
              max: 3000,
              min: 1024,
            },
            items: 3,
            partialVisibilityGutter: 40,
          },
          tablet: {
            breakpoint: {
              max: 1024,
              min: 464,
            },
            items: 2,
            partialVisibilityGutter: 30,
          },
          mobile: {
            breakpoint: {
              max: 464,
              min: 0,
            },
            items: 1,
            partialVisibilityGutter: 0,
          },
        }}
        sliderClass=""
        slidesToSlide={1}
        swipeable
      >
        {newGoods.map(item => (
          <GoodsCardById key={item._id} data={item} />
        ))}
      </Carousel>
    </div>
  );
};

export default NewGoodsBox;
