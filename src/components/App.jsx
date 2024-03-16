import { lazy, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { refreshThunk } from '../redux/operations-auth';
import { useDispatch } from 'react-redux';
import Layout from './Layout';
import PrivateRoute from './utils/route-types/PrivateRoute';
import PublicRoute from './utils/route-types/PublicRoute';
import IndexPage from '../pages/IndexPage';
import NotFoundPage from '../pages/NotFoundPage';

const ContactsPage = lazy(() => import('../pages/ContactsPage'));
const LoginPage = lazy(() => import('../pages/LoginPage'));
const RegisterPage = lazy(() => import('../pages/RegisterPage'));

export default function App() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(refreshThunk());
    }, [dispatch]);

    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<IndexPage />} />

                <Route
                    path="/register"
                    element={
                        <PublicRoute
                            redirectTo="/contacts"
                            component={<RegisterPage />}
                        />
                    }
                />
                <Route
                    path="/login"
                    element={
                        <PublicRoute
                            redirectTo="/contacts"
                            component={<LoginPage />}
                        />
                    }
                />
                <Route
                    path="/contacts"
                    element={
                        <PrivateRoute
                            redirectTo="/login"
                            component={<ContactsPage />}
                        />
                    }
                />

                <Route path="*" element={<NotFoundPage />} />
            </Route>
        </Routes>
    );
}
