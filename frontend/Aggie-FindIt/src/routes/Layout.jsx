import {Outlet, Link} from "react-router-dom";

const Layout = () => {
    return (
        <div className="layout-container">
            <header className="layout-header">
                <nav className="layout-nav">
                    <ul>
                        <li><Link to="/login">Login</Link></li>
                    </ul>
                </nav>
            </header>
            <main className="layout-main">
                <Outlet />
            </main>
            <footer className="layout-footer">
                <p>&copy; 2025 Aggie Find-It</p>
            </footer>
        </div>
    );
}

export default Layout;