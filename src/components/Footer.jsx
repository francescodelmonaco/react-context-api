import { NavLink } from "react-router-dom";

export function Footer() {
    return (
        <footer
            className="navbar navbar-expand-lg bg-body-tertiary d-flex flex-column"
            data-bs-theme="dark">
            <div className="collapse navbar-collapse d-flex flex-row-reverse justify-content-center" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                    <NavLink
                        className="nav-link"
                        aria-current="page"
                        to="/">
                        Home
                    </NavLink>

                    <NavLink
                        className="nav-link"
                        to="/about-us">
                        About us
                    </NavLink>

                    <NavLink
                        className="nav-link"
                        to="/posts-list">
                        Posts
                    </NavLink>
                </div>
            </div>

            <NavLink className="navbar-brand border-top container-fluid justify-content-center p-4" to="/">React Blog Pages</NavLink>
        </footer >
    )
};