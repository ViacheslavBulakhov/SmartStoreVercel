import { useForm } from "react-hook-form";
import CloseBtn from "../../../Other/CloseBtn";
import {
  AuthModalWrap,
  AuthTitleWrap,
  Form,
  Input,
  InputWrap,
  Label,
  SubmitFormBtn,
} from "../AuthModalStyled";

const Login = ({ toggleModal }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <AuthModalWrap>
      <AuthTitleWrap>
        <h3>Вхід</h3>
        <CloseBtn type="button" toggleModal={toggleModal} />
      </AuthTitleWrap>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <InputWrap>
          <Label htmlFor="login">Логін</Label>
          <Input
            id="login"
            {...register("login", { required: true, maxLength: 30 })}
          />
          {errors.login && errors.login.type === "required" && (
            <span>Поле є обов'язковим</span>
          )}
          {errors.login && errors.login.type === "maxLength" && (
            <span>Max length exceeded</span>
          )}
        </InputWrap>

        <InputWrap>
          <Label htmlFor="password">Пароль</Label>
          <Input
            id="password"
            type="password"
            {...register("password", { required: true, maxLength: 10 })}
          />
          {errors.password && errors.password.type === "required" && (
            <span>Поле є обов'язковим</span>
          )}
          {errors.password && errors.password.type === "maxLength" && (
            <span>Max length exceeded</span>
          )}
        </InputWrap>

        <SubmitFormBtn type="submit">Продовжити</SubmitFormBtn>
      </Form>
    </AuthModalWrap>
  );
};

export default Login;
