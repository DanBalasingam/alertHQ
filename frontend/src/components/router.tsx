import { createBrowserRouter } from 'react-router';
import Layout from './layout';
import NotFound from '../NotFound';
import Dashboard from '../Dashboard';
import Alerts from '../Alerts';
import Incidents from '../Incidents';

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        errorElement: <NotFound />,
        children: [
            { index: true, element: <Dashboard /> },
            { path: "alerts", element: <Alerts /> },
            { path: "incidents", element: <Incidents /> }
        ],
    },
]);