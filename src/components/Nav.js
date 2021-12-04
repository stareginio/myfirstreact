const Nav = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <div className="navbar-nav" id="navbarNavAltMarkup">
                        <a className="nav-link" aria-current="page" href="/">Home</a>
                        <a className="nav-link" href="/">Employees</a>
                        <a className="nav-link" href="/">Add Employees</a>
                        <a className="nav-link" href="/">Edit Employees</a>
                        <a className="nav-link" href="/">Remove Employees</a>
                        <a className="nav-link disabled" href="/" tabindex="-1" aria-disabled="true">Disabled</a>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Nav;