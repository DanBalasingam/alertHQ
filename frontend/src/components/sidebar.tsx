import { Link } from 'react-router';

function Sidebar() {
    return (
        <aside className="sidebar">
            <h2 className="side-title">AlertHQ</h2>
            <div className="side-body">
                <p className="side-sec-title">MONITORING</p>
                <Link to="/" style={{ textDecoration: "none", color: "inherit" }}><p className="side-item">Dashboard</p></Link>
                <Link to="/alerts" style={{ textDecoration: "none", color: "inherit" }}><p className="side-item">Alerts</p></Link>
                <Link to="/incidents" style={{ textDecoration: "none", color: "inherit" }}><p className="side-item">Incidents</p></Link>
            </div>
            <div className="side-bottom">
                <p className="side-sec-title">CONFIG</p>
                <p className="side-item">Templates</p>
                <p className="side-item">Settings</p>
            </div>
            <div className="side-alerts">
                <Link to="/alerts" style={{ textDecoration: "none", color: "inherit" }}>
                    <div className="side-alert-card">
                        <p className="side-alert-card-heading">1 Critical</p>
                        <p className="side-alert-card-body">Requires Attention</p>
                    </div>
                </Link>
            </div>
        </aside>
    )
}

export default Sidebar; 