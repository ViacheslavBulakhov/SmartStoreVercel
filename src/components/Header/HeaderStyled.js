import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const HeaderEl = styled.header`
  //   box-shadow: var(--shadow);
  background-color: var(--colors-ui-base);
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 0;
`;

export const LogoWrap = styled(NavLink).attrs({
  to: "/",
})`
  font-weight: var(--fw-bold);
  font-size: 26px;

  color: var(--colors-text);
  text-decoration: none;

  animation: rotateY 3000ms infinite alternate backwards ease-in-out 1000ms;
`;

export const WorkScheduleBox = styled.div``;

export const NavLinkList = styled.ul`
  display: flex;
  gap: 10px;

  & > li > a {
    font-size: var(--fs-md);
    font-weight: var(--fw-bold);
    transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);
    color: var(--color-text);
    &:hover {
      cursor: pointer;
      color: var(--accent-color);
      text-decoration: underline;
    }
  }
`;

export const UserBox = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  & > svg {
    cursor: pointer;
  }
`;

export const UserStatusWrap = styled.div`
  width: "30px";
  height: "30px";

  cursor: pointer;
`;

export const SwitcherWrap = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 5px;
  font-weight: var(--fw-normal);
  text-transform: capitalize;
`;
