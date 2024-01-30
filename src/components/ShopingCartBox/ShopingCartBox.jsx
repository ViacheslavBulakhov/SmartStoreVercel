import { FaShoppingCart } from "react-icons/fa";
import { ShopingCartWrap, ShopingCount } from "./ShopingCartBoxStyled";
import { useState } from "react";

const ShopingCartBox = () => {
  const [cartCount, setCartCount] = useState(0);
  return (
    <>
      <ShopingCartWrap onClick={() => setCartCount(cartCount + 1)}>
        <FaShoppingCart color="var(--colors-text)" size="25px" />
        <ShopingCount>{cartCount}</ShopingCount>
      </ShopingCartWrap>
    </>
  );
};

export default ShopingCartBox;
