import { IoLogOutSharp, IoMoon } from 'react-icons/io5';
import { MdOutlineWbSunny } from 'react-icons/md';

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
import { useStore } from '../../zustand/store';
import Flag from '../../assets/flag.png';
import styled from 'styled-components';

const UaFlag = styled.div`
  width: 30px;
  height: 30px;
  background-image: url(${Flag});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  margin-right: 10px;
`;

const Header = () => {
  const [theme, setTheme] = useState('light');
  const isLoggedIn = useStore(state => state.auth.isLoggedIn);
  const { removeUser } = useStore();

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

  const onLogOut = () => {
    removeUser();
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
            <UaFlag />
            <SwitcherWrap onClick={toggleTheme}>
              {theme === 'light' ? (
                <MdOutlineWbSunny size={'25px'} />
              ) : (
                <IoMoon size={'25px'} />
              )}
            </SwitcherWrap>
            <UserStatusBox />
            {isLoggedIn && <IoLogOutSharp size={30} onClick={onLogOut} />}
          </UserBox>
        </Wrapper>
      </Container>
    </HeaderEl>
  );
};

export default Header;
