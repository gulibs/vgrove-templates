import { Outlet } from 'react-router';

export default function RootLayout() {
    return (
        <div className="layout">
            <main className="main">
                <Outlet />
            </main>
        </div>
    );
} 