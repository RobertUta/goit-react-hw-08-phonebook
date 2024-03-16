import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { selectIsUserLoggedIn } from '../../../redux/selectors.js';

// export default function PublicRoute() {
//     const isLoggedIn = useSelector(selectIsUserLoggedIn);
//     return !isLoggedIn ? <Outlet /> : <Navigate to="/contacts" />;
// }

export default function PublicRoute({
    component: Component,
    redirectTo = '/',
}) {
    const isLoggedIn = useSelector(selectIsUserLoggedIn);
    return isLoggedIn ? <Navigate to={redirectTo} /> : Component;
}
