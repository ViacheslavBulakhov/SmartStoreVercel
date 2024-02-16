import { useEffect, useState } from 'react';
import { Container } from '../../components/Container';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import { notifyError } from '../../components/Toasters/Toasters';
import { Wrap } from './DetailsPageStyled';

const DetailsPage = () => {
  const [data, setData] = useState('');
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

  return (
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

        <div>
          <div>відгуки +фаворіт</div>
          <div>модель+ціна</div>

          <div>кількість+купити Батон</div>
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
          <button type="button">Додати відгук</button>
        </div>
      </div>
    </Container>
  );
};

export default DetailsPage;
