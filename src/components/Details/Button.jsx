import styled from "styled-components";
import { IoArrowBack } from "react-icons/io5";
import { useLocation, useNavigate } from "react-router-dom";

const BackBtn = styled.button`
  padding: 0 1rem;
  background-color: var(--colors-ui-base);
  box-shadow: var(--shadow);
  line-height: 2.5;
  border-radius: var(--b-radius);

  border: none;
  display: flex;
  align-items: center;
  gap: 0.75rem;

  color: var(--color-text);
  cursor: pointer;
`;

const Button = () => {
  const navigate = useNavigate();
  const { key } = useLocation();

  const onBackLink = () => {
    if (key === "default") {
      navigate("/");
    } else {
      navigate(-1);
    }
  };

  return (
    <BackBtn onClick={onBackLink}>
      <IoArrowBack /> Back
    </BackBtn>
  );
};

export default Button;
