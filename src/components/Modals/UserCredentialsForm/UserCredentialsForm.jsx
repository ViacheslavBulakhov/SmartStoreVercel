/* eslint-disable react/prop-types */
import {
  AuthModalWrap,
  AuthTitleWrap,
  Form,
  Input,
  InputWrap,
  Label,
  SubmitFormBtn,
} from '../AuthModal/AuthModalStyled';
import CloseBtn from '../../Common/CloseBtn';
import { useForm } from 'react-hook-form';
import { UserCredentialsFormWrap } from './UserCredentialsFormStyled';
import { sendMail } from '../../../services/sendMail';

const UserCredentialsForm = ({ buyingList, toggleUserForm }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async data => {
    await sendMail({ user: data, buyingList });
    toggleUserForm();
  };

  return (
    <UserCredentialsFormWrap>
      <AuthModalWrap>
        <AuthTitleWrap>
          <h3>Введіть дані і наш оператор з вами звяжеться</h3>
          <CloseBtn type="button" toggleModal={toggleUserForm} />
        </AuthTitleWrap>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <InputWrap>
            <Label htmlFor="number">Ваш номер телефону</Label>
            <Input
              id="number"
              defaultValue="+380"
              {...register('number', {
                required: true,
                pattern: {
                  value: /^\+380\d{9}$/,
                  message: 'Введіть коректний номер у форматі +380XXXXXXXXX',
                },
                minLength: {
                  value: 13,
                  message: 'Мінімальна довжина 13 символів',
                },
                maxLength: {
                  value: 13,
                  message: 'Максимальна довжина 13 символів',
                },
              })}
            />
            {errors?.number?.type === 'required' && (
              <span>Поле є обов'язковим</span>
            )}
            {errors?.number?.type === 'pattern' && (
              <span>{errors?.number?.message}</span>
            )}
            {errors?.number?.type === 'minLength' && (
              <span>{errors?.number?.message}</span>
            )}
            {errors?.number?.type === 'maxLength' && (
              <span>{errors?.number?.message}</span>
            )}
          </InputWrap>

          <InputWrap>
            <Label htmlFor="name">Ім'я</Label>
            <Input
              type="text"
              id="name"
              defaultValue=""
              {...register('name', {
                required: true,
                pattern: {
                  value: /^[a-zA-Zа-яА-ЯґҐєЄіІїЇ\s]+$/,
                  message: 'Імя та прізвище мають складатись тільки з букв',
                },
              })}
            />
            {errors?.name?.type === 'required' && (
              <span>Поле є обов'язковим</span>
            )}
            {errors?.name?.type === 'pattern' && (
              <span>{errors?.name?.message}</span>
            )}
          </InputWrap>

          <SubmitFormBtn type="submit">Замовити</SubmitFormBtn>
        </Form>
      </AuthModalWrap>
    </UserCredentialsFormWrap>
  );
};

export default UserCredentialsForm;
