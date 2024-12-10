import { checkIsNewGoods } from '../../utils';
import { useStore } from '../../zustand/store';
import GoodsCardById from '../Goods/GoodsListByNestedId/GoodsCardById';

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    partialVisibilityGutter: 0,
  },
};

const NewGoodsBox = () => {
  const goods = useStore(state => state.goods);

  const newGoods = goods.filter(item => checkIsNewGoods(item.createdAt));

  return (
    <div>
      <Carousel
        responsive={responsive}
        infinite={true}
        removeArrowOnDeviceType={['tablet', 'mobile']}
        itemClass="carousel-item"
        containerClass="carousel-container"
      >
        {newGoods.map(item => (
          <GoodsCardById key={item._id} data={item} />
        ))}
      </Carousel>
    </div>
  );
};

export default NewGoodsBox;
