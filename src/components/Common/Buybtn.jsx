/* eslint-disable react/prop-types */
import styled from 'styled-components';
import { notifyAddGoodsToShopingCart, notifyError } from '../Toasters/Toasters';
import { useStore } from '../../zustand/store';

const BuyBtn = styled.button`
  display: block;
  width: calc(100% - 30px);
  padding: 8px 0;
  margin: 0 auto;

  border-radius: var(--b-radius);
  border: var(--border-base);

  box-shadow: var(--shadow);

  text-transform: uppercase;
  // color: var(--colors-text);
  color: black;
  font-size: var(--fs-sd);
  font-weight: var(--fw-normal);

  // background-color: hsl(0deg 7.6% 81.25% / 38%);
  background-color: #3dc539;

  transition: background 0.15s ease 0.05s;
  cursor: pointer;

  &:hover {
    background-color: #dee2e6;

    scale: 1.03;
    box-shadow: 5px 5px 15px 1px rgba(0, 0, 0, 0.7);
  }

  &:active {
    scale: 0.9;
  }
`;

const Buybtn = ({ data }) => {
  const { setNewIdList } = useStore();
  const { _id, title } = data;

  const onByClick = id => {
    try {
      let idList = JSON.parse(localStorage.getItem('idList')) || [];

      if (!idList.includes(id)) {
        const newArr = [...idList, id];

        localStorage.setItem('idList', JSON.stringify(newArr));
        setNewIdList(newArr);
        notifyAddGoodsToShopingCart(title);
        return;
      } else {
        notifyAddGoodsToShopingCart(title);
      }
    } catch (error) {
      notifyError(
        "Щось пішло не так, спробуйте пізніше або зв'яжіться з нами по телефону!"
      );
    }
  };

  return (
    <BuyBtn
      type="button"
      onClick={() =>
        data.count > 0 ? onByClick(_id) : console.log('Сповістити мене')
      }
    >
      {data.count > 0 ? 'Купити' : 'Сповістити про наявність'}
    </BuyBtn>
  );
};

export default Buybtn;
