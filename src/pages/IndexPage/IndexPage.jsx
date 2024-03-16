import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { selectIsUserLoggedIn } from '../../redux/selectors.js';

export default function IndexPage() {
    const isLoggedIn = useSelector(selectIsUserLoggedIn);
    return isLoggedIn ? <Navigate to="/contacts" /> : <Navigate to="/login" />;
}
