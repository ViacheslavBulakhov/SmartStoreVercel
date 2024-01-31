import { IoMoon, IoMoonOutline } from "react-icons/io5";

import Logo from "../../assets/SmartStore.svg?react";

import {
  HeaderEl,
  SwitcherWrap,
  Wrapper,
  NavLinkList,
  UserBox,
  WorkScheduleBox,
  LogoWrap,
} from "./HeaderStyled";
import { useEffect, useState } from "react";
import { Container } from "../Container";
import UserStatusBox from "./UserStatus/UserStatusBox";

const Header = () => {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    document.body.setAttribute("data-theme", theme);
  }, [theme]);

  const toggleTheme = () => setTheme(theme === "light" ? "dark" : "light");

  return (
    <HeaderEl>
      <Container>
        <Wrapper>
          <LogoWrap>
            <Logo width="90px" height="90px" />
          </LogoWrap>

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
            <UserStatusBox />
          </UserBox>
        </Wrapper>
      </Container>
    </HeaderEl>
  );
};

export default Header;
