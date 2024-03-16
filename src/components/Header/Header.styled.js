import styled from '@emotion/styled';
import { AppBar, Button } from '@mui/material';
import { NavLink as StyledNavLink } from 'react-router-dom';
import Container from '../common/Container/';

export const SiteHeader = styled(AppBar)`
    position: static;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const HeaderContainer = styled(Container)`
    padding: 0;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const TopWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const BottomWrapper = styled.div`
    height: 44px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #f7f710;
    background-color: #115293;
`;

export const Logo = styled(StyledNavLink)`
    text-shadow: 2px 8px 6px rgba(0, 0, 0, 0.2),
        0px -5px 35px rgba(255, 255, 255, 0.3);

    padding: 10px 0;
    font-weight: 600;
    font-size: 40px;
    text-decoration: none;
    color: inherit;
    transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);

    &:hover {
        transform: translateY(-2px);
    }
`;

export const UserMenu = styled.nav`
    display: flex;
    column-gap: 15px;
`;

export const NavLink = styled(StyledNavLink)`
    text-shadow: 2px 4px 3px rgba(0, 0, 0, 0.3);

    font-weight: 600;
    letter-spacing: 1.5px;
    padding: 7px 10px;
    font-size: 17.5px;
    text-decoration: none;
    line-height: 1;
    color: #f4f46f;
    transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
    border-radius: 50%;

    &.active {
        background-color: #f4f46f;
        color: #0a4683;
    }

    &:hover {
        transform: translateY(-2px);
    }
`;

export const UserInfoWrapper = styled.div`
    width: 450px;
    padding-left: 175px;
    display: flex;
    align-items: center;
    column-gap: 7px;
`;
export const UserEmail = styled.span`
    color: #f4f46f;
    padding: 0 12px;
    font-weight: 500;
    font-size: 15px;
    letter-spacing: 1px;
    text-shadow: 2px 4px 3px rgba(0, 0, 0, 0.3);
`;
export const LogoutButon = styled(Button)`
    padding: 3px 8px;
    font-size: 15px;
    letter-spacing: 2px;
    text-shadow: 2px 4px 3px rgba(0, 0, 0, 0.3);

    font-weight: 500;
    color: #f9846f;
    text-transform: none;
    outline: none;
    border-color: transparent;
`;
export const DecorLine = styled.span`
    font-weight: 400;
    color: #ffffff6b;
    text-transform: none;
`;
