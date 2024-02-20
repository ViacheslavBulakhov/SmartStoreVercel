import { useEffect, useState } from 'react';
import { Container } from '../../components/Container';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import { notifyError, notifySucces } from '../../components/Toasters/Toasters';
import {
  ReviewsBox,
  ReviewsWrap,
  TextDescription,
  Wrap,
} from './DetailsPageStyled';
import { FaStar } from 'react-icons/fa';
import { StarWrap } from '../../components/Goods/GoodsListByNestedId/GoodsCardStyled';
import { FcDislike, FcLike } from 'react-icons/fc';
import { useStore } from '../../zustand/store';
import { applyDiscount, calculateAverageRating, formatter } from '../../utils';
import ModalPort from '../../components/ModalPort/ModalPort';
import ReviewsForm from '../../components/Modals/ReviewsForm/ReviewsForm';

const DetailsPage = () => {
  const [data, setData] = useState(null);
  const [isShowModal, setIsShowModal] = useState(false);

  const user = useStore(state => state.auth.user);
  const { getGoods } = useStore();

  const { goodsId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const getData = async () => {
      try {
        const result = await axios.get(`/goods/${goodsId}`);
        setData(result.data);
      } catch (error) {
        notifyError('Це посилання вже не дійсне');
        navigate('/');
      }
    };
    getData();
  }, []);

  const toggleModal = () => setIsShowModal(prev => !prev);

  const handleFavorite = async id => {
    try {
      const result = await axios.patch(`goods/${id}/favorite`);

      if (result.status === 200) getGoods();

      if (result.data.favorites.includes(user.id)) {
        notifySucces('Товар успішно додано до закладок!');
        return;
      }
      notifySucces('Товар успішно видалено з закладок закладок!');
    } catch (error) {
      if (error?.response?.status === 401) {
        notifyError(
          'Для додавання товару в закладки необхідно увійти в акаунт!'
        );
        return;
      }
      notifyError('Упс, щось пішло не так ...Спробуйте пізніше');
    }
  };

  const isFavorite = user ? data.favorites.includes(user?.id) : false;
  const discount = data && parseInt(data.discount);
  const ratingArr = data && data.reviews.map(item => item.feedbackPoints);

  return (
    data && (
      <>
        <Container>
          <h2>{data.title}</h2>

          <Wrap>
            <div style={{ width: '50%' }}>
              <img
                src={data.imgUrl}
                alt={data.title}
                width={'100%'}
                height={'auto'}
              />
            </div>

            <div style={{ width: '50%', padding: '20px' }}>
              <ReviewsBox>
                <ReviewsWrap>
                  <StarWrap>
                    {[...Array(5)].map((_, index) => (
                      <FaStar
                        key={index}
                        size={25}
                        color={
                          index < calculateAverageRating(ratingArr)
                            ? 'rgb(201 183 77)'
                            : 'gray'
                        }
                      />
                    ))}
                  </StarWrap>

                  <TextDescription>
                    Відгуки: <span>{`(count)`}</span>
                  </TextDescription>
                </ReviewsWrap>

                <div
                  style={{ cursor: 'pointer' }}
                  onClick={() => handleFavorite(data._id)}
                >
                  {isFavorite ? <FcLike size={30} /> : <FcDislike size={30} />}
                </div>
              </ReviewsBox>

              <ReviewsBox>
                <TextDescription>
                  Модель: <span>{`${data.model}`}</span>
                </TextDescription>
                {discount ? (
                  <div>
                    <TextDescription>
                      Вартість:<span>{formatter.format(data.amount)}</span>
                    </TextDescription>
                    <TextDescription>
                      Вартість:
                      <span>
                        {formatter.format(applyDiscount(data.amount, discount))}
                      </span>
                    </TextDescription>
                  </div>
                ) : (
                  <div>
                    <TextDescription>
                      Вартість: <span>{formatter.format(data.amount)}</span>
                    </TextDescription>
                  </div>
                )}
              </ReviewsBox>
            </div>
          </Wrap>

          <div>
            <nav>
              <a rel="stylesheet" href="">
                Характеристики
              </a>
              <a rel="stylesheet" href="">
                Відгуків
              </a>
            </nav>
            <div>
              <h2>Опис Товару</h2>

              <h4>{data.title}</h4>
              <p>{data.description}</p>
            </div>
            <div>
              <h2>Характеристики</h2>

              <h4>{data.title}</h4>
              <p>перебрати фільтри</p>
            </div>
            <div>
              <h2>
                Відгуки<span>count</span>
              </h2>
              <ul>
                <li>карти відгуків</li>
              </ul>
              <button type="button" onClick={toggleModal}>
                Додати відгук
              </button>
            </div>
          </div>
        </Container>
        {isShowModal && (
          <ModalPort toggleModal={toggleModal}>
            <ReviewsForm toggleModal={toggleModal} data={data} />
          </ModalPort>
        )}
      </>
    )
  );
};

export default DetailsPage;
