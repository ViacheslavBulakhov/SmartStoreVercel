import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const BuyBtn = styled.button`
  display: block;
  width: calc(100% - 30px);
  padding: 8px 0;
  margin-top: 20px;

  border-radius: var(--b-radius);
  border: var(--border-base);

  box-shadow: var(--shadow);

  text-transform: uppercase;
  color: var(--colors-text);
  font-size: var(--fs-sd);
  font-weight: var(--fw-normal);

  background-color: hsl(0deg 7.6% 81.25% / 38%);

  transition: background 0.15s ease 0.05s;
  cursor: pointer;

  &:hover {
    background-color: #dee2e6;
    transform: translate(-5px, -5px);
    box-shadow: 5px 5px 15px 1px rgba(0, 0, 0, 0.7);
  }
`;

const CardList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;

const CardItemWrap = styled.li`
  width: calc(33.33% - 20px);

  padding: 20px;

  border-radius: 5px;
  box-shadow: var(--shadow);
  overflow: hidden;
  background-color: var(--colors-bg);
  & > div:not(:first-child) {
    margin-top: 20px;
  }

  &:hover {
    background-color: hsl(243.69deg 16.79% 90.54% / 81%);
  }
`;

const CardLink = styled(NavLink)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;

const DescriptionWrap = styled.div``;

const GoodsListByNestedId = () => {
  return (
    <div style={{ flex: '0 0 75%', maxWidth: '75%' }}>
      <CardList>
        <CardItemWrap>
          <div>
            <CardLink>
              <img
                src="https://picsum.photos/100/100"
                alt=""
                width="200px"
                height="200px"
              />
              <h3>Назва товару</h3>
            </CardLink>
          </div>
          <div>
            <span>1</span>
            <span>2</span>
            <span>3</span>
            <span>4</span>
            <span>5</span>
          </div>
          <div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
              officiis ab est totam blanditiis incidunt unde ipsam officia quasi
              enim, temporibus accusamus!
            </p>
            <span>ціна</span>
            <span>ціна зі знижкою</span>
            <BuyBtn type="button">Купити</BuyBtn>
          </div>
        </CardItemWrap>
        <CardItemWrap>
          <div>
            <CardLink>
              <img
                src="https://picsum.photos/100/100"
                alt=""
                width="200px"
                height="200px"
              />
              <h3>Назва товару</h3>
            </CardLink>
          </div>
          <div>
            <span>1</span>
            <span>2</span>
            <span>3</span>
            <span>4</span>
            <span>5</span>
          </div>
          <div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
              officiis ab est totam blanditiis incidunt unde ipsam officia quasi
              enim, temporibus accusamus!
            </p>
            <span>ціна</span>
            <span>ціна зі знижкою</span>
            <BuyBtn type="button">Купити</BuyBtn>
          </div>
        </CardItemWrap>

        <CardItemWrap>
          <div>
            <CardLink>
              <img
                src="https://picsum.photos/100/100"
                alt=""
                width="200px"
                height="200px"
              />
              <h3>Назва товару</h3>
            </CardLink>
          </div>
          <div>
            <span>1</span>
            <span>2</span>
            <span>3</span>
            <span>4</span>
            <span>5</span>
          </div>
          <div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
              officiis ab est totam blanditiis incidunt unde ipsam officia quasi
              enim, temporibus accusamus!
            </p>
            <span>ціна</span>
            <span>ціна зі знижкою</span>
            <BuyBtn type="button">Купити</BuyBtn>
          </div>
        </CardItemWrap>

        <CardItemWrap>
          <div>
            <CardLink>
              <img
                src="https://picsum.photos/100/100"
                alt=""
                width="200px"
                height="200px"
              />
              <h3>Назва товару</h3>
            </CardLink>
          </div>
          <div>
            <span>1</span>
            <span>2</span>
            <span>3</span>
            <span>4</span>
            <span>5</span>
          </div>
          <div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
              officiis ab est totam blanditiis incidunt unde ipsam officia quasi
              enim, temporibus accusamus!
            </p>
            <span>ціна</span>
            <span>ціна зі знижкою</span>
            <BuyBtn type="button">Купити</BuyBtn>
          </div>
        </CardItemWrap>

        <CardItemWrap>
          <div>
            <CardLink>
              <img
                src="https://picsum.photos/100/100"
                alt=""
                width="200px"
                height="200px"
              />
              <h3>Назва товару</h3>
            </CardLink>
          </div>
          <div>
            <span>1</span>
            <span>2</span>
            <span>3</span>
            <span>4</span>
            <span>5</span>
          </div>
          <div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
              officiis ab est totam blanditiis incidunt unde ipsam officia quasi
              enim, temporibus accusamus!
            </p>
            <span>ціна</span>
            <span>ціна зі знижкою</span>
            <BuyBtn type="button">Купити</BuyBtn>
          </div>
        </CardItemWrap>

        <CardItemWrap>
          <div>
            <CardLink>
              <img
                src="https://picsum.photos/100/100"
                alt=""
                width="200px"
                height="200px"
              />
              <h3>Назва товару</h3>
            </CardLink>
          </div>
          <div>
            <span>1</span>
            <span>2</span>
            <span>3</span>
            <span>4</span>
            <span>5</span>
          </div>
          <div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
              officiis ab est totam blanditiis incidunt unde ipsam officia quasi
              enim, temporibus accusamus!
            </p>
            <span>ціна</span>
            <span>ціна зі знижкою</span>
            <BuyBtn type="button">Купити</BuyBtn>
          </div>
        </CardItemWrap>

        <CardItemWrap>
          <div>
            <CardLink>
              <img
                src="https://picsum.photos/100/100"
                alt=""
                width="200px"
                height="200px"
              />
              <h3>Назва товару</h3>
            </CardLink>
          </div>
          <div>
            <span>1</span>
            <span>2</span>
            <span>3</span>
            <span>4</span>
            <span>5</span>
          </div>
          <div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
              officiis ab est totam blanditiis incidunt unde ipsam officia quasi
              enim, temporibus accusamus!
            </p>
            <span>ціна</span>
            <span>ціна зі знижкою</span>
            <BuyBtn type="button">Купити</BuyBtn>
          </div>
        </CardItemWrap>

        <CardItemWrap>
          <div>
            <CardLink>
              <img
                src="https://picsum.photos/100/100"
                alt=""
                width="200px"
                height="200px"
              />
              <h3>Назва товару</h3>
            </CardLink>
          </div>
          <div>
            <span>1</span>
            <span>2</span>
            <span>3</span>
            <span>4</span>
            <span>5</span>
          </div>
          <div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
              officiis ab est totam blanditiis incidunt unde ipsam officia quasi
              enim, temporibus accusamus!
            </p>
            <span>ціна</span>
            <span>ціна зі знижкою</span>
            <BuyBtn type="button">Купити</BuyBtn>
          </div>
        </CardItemWrap>

        <CardItemWrap>
          <div>
            <CardLink>
              <img
                src="https://picsum.photos/100/100"
                alt=""
                width="200px"
                height="200px"
              />
              <h3>Назва товару</h3>
            </CardLink>
          </div>
          <div>
            <span>1</span>
            <span>2</span>
            <span>3</span>
            <span>4</span>
            <span>5</span>
          </div>
          <div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
              officiis ab est totam blanditiis incidunt unde ipsam officia quasi
              enim, temporibus accusamus!
            </p>
            <span>ціна</span>
            <span>ціна зі знижкою</span>
            <BuyBtn type="button">Купити</BuyBtn>
          </div>
        </CardItemWrap>

        <CardItemWrap>
          <div>
            <CardLink>
              <img
                src="https://picsum.photos/100/100"
                alt=""
                width="200px"
                height="200px"
              />
              <h3>Назва товару</h3>
            </CardLink>
          </div>
          <div>
            <span>1</span>
            <span>2</span>
            <span>3</span>
            <span>4</span>
            <span>5</span>
          </div>
          <div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
              officiis ab est totam blanditiis incidunt unde ipsam officia quasi
              enim, temporibus accusamus!
            </p>
            <span>ціна</span>
            <span>ціна зі знижкою</span>
            <BuyBtn type="button">Купити</BuyBtn>
          </div>
        </CardItemWrap>
      </CardList>
    </div>
  );
};

export default GoodsListByNestedId;
