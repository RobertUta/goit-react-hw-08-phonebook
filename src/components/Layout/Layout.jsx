import { Suspense } from 'react';
import { useSelector } from 'react-redux';
import Header from '../Header';
import { LoaderBackdrop } from './Layout.styled.js';
import { Outlet } from 'react-router-dom';
import { selectIsLoading } from '../../redux/selectors';

export default function Layout() {
    const isLoading = useSelector(selectIsLoading);

    return (
        <>
            <Header />
            <Suspense fallback={<LoaderBackdrop />}>
                <Outlet />
            </Suspense>
            {isLoading && <LoaderBackdrop />}
        </>
    );
}
