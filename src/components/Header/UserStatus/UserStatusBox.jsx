import { useState } from 'react';
import { UserStatusWrap } from '../HeaderStyled';
import { FaUser, FaUserCheck } from 'react-icons/fa';
import ModalPort from '../../ModalPort/ModalPort';
import AuthModal from '../../Modals/AuthModal/AuthModal';
import { useAuth } from '../../../zustand/store';

const UserStatusBox = () => {
  const { isLoggedIn } = useAuth();
  const [isShowModal, setIsShowModal] = useState(false);
  const toggleModal = () => setIsShowModal(prev => !prev);

  const onClickCart = () => {
    toggleModal();
  };

  return (
    <>
      <UserStatusWrap onClick={onClickCart} style={{}}>
        {!isLoggedIn ? (
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
