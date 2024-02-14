import { useState } from 'react';
import { UserStatusWrap } from '../HeaderStyled';
import { FaUser, FaUserCheck } from 'react-icons/fa';
import ModalPort from '../../ModalPort/ModalPort';
import AuthModal from '../../Modals/AuthModal/AuthModal';
import { useStore } from '../../../zustand/store';
import { useNavigate } from 'react-router-dom';

const UserStatusBox = () => {
  const [isShowModal, setIsShowModal] = useState(false);
  const isLoggedIn = useStore(state => state.auth.isLoggedIn);
  const navigate = useNavigate();

  const toggleModal = () => setIsShowModal(prev => !prev);
  console.log(isLoggedIn);
  return (
    <>
      <UserStatusWrap>
        {!isLoggedIn ? (
          <FaUser
            color="var(--colors-text)"
            size="25px"
            onClick={() => toggleModal()}
          />
        ) : (
          <FaUserCheck
            color="var(--colors-text)"
            size="30px"
            onClick={() => navigate('/user')}
          />
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
