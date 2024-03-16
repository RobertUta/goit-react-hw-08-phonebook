import AppToastContainer from '../../components/AppToastContainer';
import RegisterForm from '../../components/RegisterForm/';
import { RegisterPageContainer, Main } from './RegisterPage.styled';

export default function RegisterPage() {
    return (
        <Main>
            <RegisterPageContainer>
                <RegisterForm />
            </RegisterPageContainer>
            <AppToastContainer />
        </Main>
    );
}
