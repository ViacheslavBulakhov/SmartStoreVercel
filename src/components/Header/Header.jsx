import { IoLogOutSharp, IoMoon, IoMoonOutline } from 'react-icons/io5';

import Logo from '../../assets/SmartStore.svg?react';

import {
  HeaderEl,
  SwitcherWrap,
  Wrapper,
  NavLinkList,
  UserBox,
  WorkScheduleBox,
  LogoWrap,
} from './HeaderStyled';
import { useEffect, useState } from 'react';
import { Container } from '../Container';
import UserStatusBox from './UserStatus/UserStatusBox';
import SocialLinks from '../SocialLinks/SocialLinks';
import { NavLink } from 'react-router-dom';
import axios from 'axios';

const Header = () => {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    document.body.setAttribute('data-theme', theme);
  }, [theme]);

  useEffect(() => {
    const setThemeBayTheTime = () => {
      const currnetHour = new Date().getHours();
      const newTheme = currnetHour >= 19 || currnetHour < 6 ? 'dark' : 'light';
      setTheme(newTheme);
    };

    setThemeBayTheTime();
  }, []);

  const toggleTheme = () => setTheme(theme === 'light' ? 'dark' : 'light');

  const onLogOut = async () => {
    const result = await axios.post('/auth/logout');
    console.log(result);
  };

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
                <NavLink to={'/rules'}>Карта Знижок</NavLink>
              </li>
              <li>
                <NavLink to={'/delivery'}>Доставка й Повернення</NavLink>
              </li>
              <li>
                <NavLink to={'/payment'}>Оплата</NavLink>
              </li>
              <li>
                <a>Відгуки</a>
              </li>
              <li>
                <a href="tel:+380 50 272 47 91">+380 50 272 47 91</a>
              </li>
            </NavLinkList>
          </nav>
          <SocialLinks />
          <UserBox>
            <SwitcherWrap onClick={toggleTheme}>
              {theme === 'light' ? (
                <IoMoonOutline size={'25px'} />
              ) : (
                <IoMoon size={'25px'} />
              )}
            </SwitcherWrap>
            <UserStatusBox />
            <IoLogOutSharp size={30} onClick={onLogOut} />
          </UserBox>
        </Wrapper>
      </Container>
    </HeaderEl>
  );
};

export default Header;
