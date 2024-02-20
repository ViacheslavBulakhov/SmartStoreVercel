import { FaStar } from 'react-icons/fa';
import { RiUserVoiceFill } from 'react-icons/ri';
import { StarWrap } from '../../Goods/GoodsListByNestedId/GoodsCardStyled';
import { ReviewsCardWrap } from './ReviewsCardStyled';

/* eslint-disable react/prop-types */
const ReviewsCard = ({ item }) => {
  return (
    <ReviewsCardWrap>
      <div>
        <RiUserVoiceFill size={'50px'} />
        <h3>{item.name}</h3>
        <span>date</span>
        <StarWrap>
          {[...Array(5)].map((_, index) => (
            <FaStar
              key={index}
              size={25}
              color={index < item.feedbackPoints ? 'rgb(201 183 77)' : 'gray'}
            />
          ))}
        </StarWrap>
      </div>
      <div>
        <p>{item.text}</p>
      </div>
    </ReviewsCardWrap>
  );
};

export default ReviewsCard;
