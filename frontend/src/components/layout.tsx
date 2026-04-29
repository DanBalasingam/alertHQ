import Navbar from './navbar';
import { Outlet } from 'react-router';

function Layout() {
    return (
        <>
            <Navbar />
            <main className="page-content">
                <Outlet />
            </main>
        </>
    )
}

export default Layout;