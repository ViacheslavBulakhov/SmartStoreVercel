import { useState } from "react";
import { UserStatusWrap } from "../HeaderStyled";
import { FaUser, FaUserCheck } from "react-icons/fa";
import ModalPort from "../../ModalPort/ModalPort";
import AuthModal from "../../Modals/AuthModal/AuthModal";

const UserStatusBox = () => {
  const [isUser, setIsUser] = useState(false);
  const [isShowModal, setIsShowModal] = useState(false);
  const toggleModal = () => setIsShowModal((prev) => !prev);
  const toggleUser = () => setIsUser((prev) => !prev);
  const onClickCart = () => {
    toggleModal();
    toggleUser();
  };
  return (
    <>
      {" "}
      <UserStatusWrap onClick={onClickCart} style={{}}>
        {!isUser ? (
          <FaUser color="var(--colors-text)" size="25px" />
        ) : (
          <FaUserCheck color="var(--colors-text)" size="30px" />
        )}
      </UserStatusWrap>
      {isShowModal && (
        <ModalPort toggleModal={toggleModal}>
          <AuthModal toggleModal={toggleModal} />
        </ModalPort>
      )}
    </>
  );
};

export default UserStatusBox;
