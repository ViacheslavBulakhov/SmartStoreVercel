import { Container } from '../../components/Container';

const DetailsPage = () => {
  return (
    <Container>
      <h2>Title</h2>
      <div>
        wrap
        <div>
          <div>
            {/* <img src="" alt="" /> */}
            імдж
          </div>
          <div>
            <div>відгуки +фаворіт</div>
            <div>модель+ціна</div>

            <div>кількість+купити Батон</div>
          </div>
        </div>
      </div>
      <div>
        DescriptionWrap
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

          <h4>title</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloribus
            eligendi illum a nam perferendis. Illum culpa temporibus velit
            necessitatibus! Ullam, possimus accusantium autem placeat vitae
            itaque temporibus enim deserunt animi.
          </p>
        </div>
        <div>
          <h2>Характеристики</h2>

          <h4>title</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloribus
            eligendi illum a nam perferendis. Illum culpa temporibus velit
            necessitatibus! Ullam, possimus accusantium autem placeat vitae
            itaque temporibus enim deserunt animi.
          </p>
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
