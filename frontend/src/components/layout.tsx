import Sidebar from './sidebar';
import { Outlet } from 'react-router';

function Layout() {
    return (
        <>
            <Sidebar />
            <main className="page-content">
                <Outlet />
            </main>
        </>
    )
}

export default Layout;