import { IoMoon, IoMoonOutline } from "react-icons/io5";
import { FaUser, FaUserCheck } from "react-icons/fa6";
import { FaShoppingCart } from "react-icons/fa";
import {
  HeaderEl,
  Title,
  SwitcherWrap,
  Wrapper,
  NavLinkList,
  UserBox,
  UserStatusWrap,
  WorkScheduleBox,
} from "./HeaderStyled";
import { useEffect, useState } from "react";
import { Container } from "../Container";

const Header = () => {
  const [theme, setTheme] = useState("light");
  const [isUser, setIsUser] = useState(false);
  const toggleUser = () => setIsUser((prev) => !prev);

  useEffect(() => {
    document.body.setAttribute("data-theme", theme);
  }, [theme]);

  const toggleTheme = () => setTheme(theme === "light" ? "dark" : "light");

  return (
    <HeaderEl>
      <Container>
        <Wrapper>
          <Title>
            <span>Smart</span>Store
          </Title>
          <WorkScheduleBox>
            <h4>Графік Роботи</h4>
            <p>
              ПН-ПТ
              <span>: 8:00-19:00</span>
            </p>
            <p>
              СБ-НД
              <span>: 10:00-18:00</span>
            </p>
          </WorkScheduleBox>
          <nav>
            <NavLinkList>
              <li>
                <a href="tel:+380 66 422 06 67">+380 66 422 06 67</a>
              </li>

              <li>
                <a>Карта Знижок</a>
              </li>
              <li>
                <a>Доставка й Повернення</a>
              </li>
              <li>
                <a>Оплата</a>
              </li>
              <li>
                <a>Відгуки</a>
              </li>
            </NavLinkList>
          </nav>
          <UserBox>
            <SwitcherWrap onClick={toggleTheme}>
              {theme === "light" ? <IoMoonOutline /> : <IoMoon />}

              <span>{`${theme === "dark" ? "Ніч" : "День"}`}</span>
            </SwitcherWrap>
            <UserStatusWrap onClick={toggleUser} style={{}}>
              {isUser ? (
                <FaUser color="var(--colors-text)" size="25px" />
              ) : (
                <FaUserCheck color="var(--colors-text)" size="30px" />
              )}
            </UserStatusWrap>
            <FaShoppingCart color="var(--colors-text)" size="25px" />
          </UserBox>
        </Wrapper>
      </Container>
    </HeaderEl>
  );
};

export default Header;
