import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { selectIsUserLoggedIn } from '../../../redux/selectors.js';

// export default function PrivateRoute() {
//     const isLoggedIn = useSelector(selectIsUserLoggedIn);
//     return isLoggedIn ? <Outlet /> : <Navigate to="/login" />;
// }

export default function PrivateRoute({
    component: Component,
    redirectTo = '/',
}) {
    const isLoggedIn = useSelector(selectIsUserLoggedIn);
    return !isLoggedIn ? <Navigate to={redirectTo} /> : Component;
}
