import { useDispatch, useSelector } from 'react-redux';
import { logoutThunk } from '../../redux/operations-auth.js';
import { selectCurrentUser } from '../../redux/selectors';
import { selectIsUserLoggedIn } from '../../redux/selectors';
import {
    SiteHeader,
    HeaderContainer,
    Logo,
    UserMenu,
    NavLink,
    UserInfoWrapper,
    UserEmail,
    LogoutButon,
    DecorLine,
    TopWrapper,
    BottomWrapper,
} from './Header.styled.js';

export default function Header() {
    const isUserLoggedIn = useSelector(selectIsUserLoggedIn);
    const currentUser = useSelector(selectCurrentUser);
    const dispatch = useDispatch();

    return (
        <SiteHeader>
            <HeaderContainer>
                <TopWrapper>
                    <Logo to="/">Phonebook</Logo>
                </TopWrapper>

                {!isUserLoggedIn && (
                    <BottomWrapper>
                        <UserMenu>
                            <NavLink to="register">Sign Up</NavLink>
                            <NavLink to="login">Log In</NavLink>
                        </UserMenu>
                    </BottomWrapper>
                )}
                {isUserLoggedIn && (
                    <BottomWrapper>
                        <UserInfoWrapper>
                            <UserEmail>{currentUser.email}</UserEmail>
                            <DecorLine>|</DecorLine>
                            <LogoutButon
                                onClick={() => dispatch(logoutThunk())}
                                variant="outlined"
                            >
                                logout
                            </LogoutButon>
                        </UserInfoWrapper>
                    </BottomWrapper>
                )}
            </HeaderContainer>
        </SiteHeader>
    );
}
