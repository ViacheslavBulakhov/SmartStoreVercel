import { useForm } from 'react-hook-form';
import {
  AuthModalWrap,
  AuthTitleWrap,
  Input,
  InputWrap,
  Label,
  Form,
  SubmitFormBtn,
} from '../AuthModal/AuthModalStyled';
import CloseBtn from '../../Common/CloseBtn';
import axios from 'axios';

const SubscribeModal = ({ toggleModal, id }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async data => {
    // toggleModal();
    await axios.post('/goods/subscribe', { id, ...data });
  };

  return (
    <AuthModalWrap>
      <AuthTitleWrap>
        <h3>Сповістити мене про наявність товару</h3>
        <CloseBtn type="button" toggleModal={toggleModal} />
      </AuthTitleWrap>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <InputWrap>
          <Label htmlFor="email">Електронна пошта</Label>
          <Input id="email" defaultValue="" {...register('email')} />
          {errors?.email?.message && <span>{errors?.email?.message}</span>}
        </InputWrap>
        <SubmitFormBtn type="submit">Підписатись</SubmitFormBtn>
      </Form>
    </AuthModalWrap>
  );
};

export default SubscribeModal;
