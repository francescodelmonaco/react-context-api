import { NavLink } from "react-router-dom";

export function NavBar() {
    return (
        <nav className="navbar navbar-expand bg-body-tertiary" data-bs-theme="dark">
            <div className="container-fluid">
                <NavLink className="navbar-brand" to="/">React Blog Pages</NavLink>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse d-flex flex-row-reverse" id="navbarSupportedContent">
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
            </div>
        </nav>
    )
};