import { FaShoppingCart } from "react-icons/fa";
import { ShopingCartWrap, ShopingCount } from "./ShopingCartBoxStyled";
import { useState } from "react";
import ModalPort from "../ModalPort/ModalPort";
import AuthModal from "../Modals/AuthModal/AuthModal";

const ShopingCartBox = () => {
  const [cartCount, setCartCount] = useState(0);
  const [isShowModal, setIsShowModal] = useState(false);

  const toggleModal = () => setIsShowModal((prev) => !prev);
  const onClickCart = () => {
    toggleModal();
    setCartCount(cartCount + 1);
  };

  return (
    <>
      <ShopingCartWrap onClick={onClickCart}>
        <FaShoppingCart color="var(--colors-text)" size="25px" />
        <ShopingCount>{cartCount}</ShopingCount>
      </ShopingCartWrap>
      {isShowModal && (
        <ModalPort toggleModal={toggleModal}>
          <AuthModal toggleModal={toggleModal} />
        </ModalPort>
      )}
    </>
  );
};

export default ShopingCartBox;
