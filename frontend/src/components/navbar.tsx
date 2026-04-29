import { Link } from 'react-router';

function Navbar() {
    return (
        <nav className="navbar">
            <h2 className="nav-title">AlertHQ</h2>
            <div className="nav-body">
                <Link to="/" style={{ textDecoration: "none", color: "inherit" }}><p className="nav-item">Dashboard</p></Link>
                <Link to="/alerts" style={{ textDecoration: "none", color: "inherit" }}><p className="nav-item">Alerts</p></Link>
                <p className="nav-item">Incidents</p>
            </div>
            <div className="nav-bottom">
                <p className="nav-item">Templates</p>
                <p className="nav-item">Settings</p>
            </div>
            <div className="nav-alerts">
                <div className="nav-alert-card">
                    <p className="nav-alert-card-heading">1 Critical</p>
                    <p className="nav-alert-card-body">Requires Attention</p>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;