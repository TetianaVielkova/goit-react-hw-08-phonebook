import { Outlet } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { AppBar } from './AppBar/AppBar';
import { Suspense } from 'react';

export const Layout = () => {
    return (
        <><div id='stars'></div><div id='stars2'></div><div id='stars3'></div><div style={{ margin: '0 auto', padding: '0 16px' }}>
            <AppBar />
            <Suspense fallback={null}>
                <Outlet />
            </Suspense>
            <Toaster position="top-right" reverseOrder={false} />
        </div></>
    );
};