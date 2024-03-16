import LoginForm from '../../components/LoginForm/';
import { Main, LoginPageContainer } from './LoginPage.styled';

export default function LoginPage() {
    return (
        <Main>
            <LoginPageContainer>
                <LoginForm />
            </LoginPageContainer>
        </Main>
    );
}
