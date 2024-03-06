import { GiTakeMyMoney } from 'react-icons/gi';

import { UkrPostLogo } from '../../components/DeliveyPageComponents/DeliveryMethodStyled';
import NovaSvg from '../../assets/novaPoshta.svg?react';
import VisaSvg from '../../assets/visa.svg?react';
import MasterCardSvg from '../../assets/mastercard.svg?react';
import {
  DeliveryMethodItem,
  OrderPageForm,
  OrderPageWrap,
  PaymentMethodList,
} from './OrderPagestyled';
import { Container } from '../../components/Container';

import {
  InputWrap,
  Input,
  Label,
  SubmitFormBtn,
  TextAreaInput,
} from '../../components/Modals/AuthModal/AuthModalStyled';

import { useForm } from 'react-hook-form';
import { sendMail } from '../../services/sendMail';
import { useLocation } from 'react-router-dom';

const OrderPage = () => {
  const {
    handleSubmit,
    formState: { errors },
    register,
  } = useForm();

  const location = useLocation();

  const onSubmit = async data => {
    await sendMail({ user: data, buyingList: location?.state });
  };

  return (
    <Container>
      <OrderPageWrap>
        <h1>Оформлення замовлення</h1>

        <OrderPageForm onSubmit={handleSubmit(onSubmit)}>
          <fieldset>
            <h3>Спосіб доставки</h3>
            {errors?.delivery?.type === 'required' && (
              <span>Оберіть Спосіб Доставки</span>
            )}
            <ul>
              <DeliveryMethodItem>
                <label htmlFor="nova-post">
                  <NovaSvg width="50px" height="50px" />
                  <h4>Доставка Новою Поштою</h4>
                </label>
                <input
                  type="radio"
                  id="nova-post"
                  name="delivery"
                  value="nova-post"
                  {...register('delivery', {
                    required: true,
                  })}
                />
              </DeliveryMethodItem>

              <DeliveryMethodItem>
                <label htmlFor="ukr-post">
                  <UkrPostLogo />
                  <h4>Доставка Укрпоштою Експрес</h4>
                </label>
                <input
                  type="radio"
                  id="ukr-post"
                  name="delivery"
                  value="ukr-post"
                  {...register('delivery', {
                    required: true,
                  })}
                />
              </DeliveryMethodItem>
            </ul>
          </fieldset>

          <fieldset>
            <h3>Спосіб оплати</h3>
            {errors?.payment?.type === 'required' && (
              <span>Оберіть Спосіб Оплати</span>
            )}
            <PaymentMethodList>
              <li>
                <label htmlFor="cash-on-delivery">
                  <GiTakeMyMoney size={50} />
                  <h4>Післяплата</h4>
                </label>
                <input
                  type="radio"
                  id="cash-on-delivery"
                  name="payment"
                  value="cash-on-delivery"
                  {...register('payment', {
                    required: true,
                  })}
                />
              </li>
              <li>
                <label htmlFor="card-payment">
                  <div>
                    <VisaSvg />
                    <MasterCardSvg />
                  </div>
                  <h4>Оплата Картою</h4>
                </label>
                <input
                  type="radio"
                  id="card-payment"
                  name="payment"
                  value="card-payment"
                  {...register('payment', {
                    required: true,
                  })}
                />
              </li>
            </PaymentMethodList>
          </fieldset>

          <fieldset>
            <h3>Адреса доставки</h3>
            <InputWrap>
              <Label htmlFor="region">Область</Label>

              <Input
                name="region"
                defaultValue=""
                {...register('region', {
                  required: true,
                })}
              />
              {errors?.region?.type === 'required' && (
                <span>Поле є обов'язковим</span>
              )}
            </InputWrap>

            <InputWrap>
              <Label htmlFor="city">Місто</Label>

              <Input
                name="city"
                defaultValue=""
                {...register('city', {
                  required: true,
                })}
              />
              {errors?.city?.type === 'required' && (
                <span>Поле є обов'язковим</span>
              )}
            </InputWrap>

            <InputWrap>
              <Label htmlFor="department">Відділеня/Поштомат</Label>

              <Input
                name="department"
                defaultValue=""
                {...register('department', {
                  required: true,
                })}
              />
              {errors?.department?.type === 'required' && (
                <span>Поле є обов'язковим</span>
              )}
            </InputWrap>

            <InputWrap>
              <Label htmlFor="name">Імя Прізвище</Label>

              <Input
                name="name"
                defaultValue=""
                {...register('name', {
                  required: true,
                })}
              />
              {errors?.name?.type === 'required' && (
                <span>Поле є обов'язковим</span>
              )}
            </InputWrap>

            <InputWrap>
              <Label htmlFor="number">Телефон</Label>
              <Input
                id="number"
                defaultValue="+380"
                {...register('number', {
                  required: true,
                  pattern: {
                    value: /^\+?[0-9]{8,15}$/,
                    message: 'Введіть коректний номер телефону',
                  },
                })}
              />
              {errors?.number?.type === 'required' && (
                <span>Поле є обов'язковим</span>
              )}
              {errors?.number?.type === 'maxLength' && (
                <span>Максимальна довжина 30 символів</span>
              )}
              {errors?.number?.type === 'pattern' && (
                <span>{errors?.login?.message}</span>
              )}
            </InputWrap>
          </fieldset>

          <fieldset>
            <h3>Коментар</h3>
            <InputWrap>
              <Label htmlFor="text">Коментар</Label>
              <TextAreaInput type="text" placeholder="" {...register('text')} />
              {errors.text && <span>{errors.text.message}</span>}
            </InputWrap>

            <SubmitFormBtn type="submit">Оформити Замовлення</SubmitFormBtn>
          </fieldset>
        </OrderPageForm>
      </OrderPageWrap>
    </Container>
  );
};

export default OrderPage;
