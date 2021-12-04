import '../styles/Nav.css';

const Nav = () => {
    return (
        <nav className="navbar fixed-top navbar-expand-lg navbar-dark">
            <div className="container-fluid">
                <a class="navbar-brand" href="#">Snail</a>

                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <div className="navbar-nav" id="navbarNavAltMarkup">
                        <a className="nav-link" aria-current="page" href="/">Home</a>
                        <a className="nav-link" href="/employee">Employees</a>
                        <a className="nav-link" href="/add">Add Employees</a>
                        <a className="nav-link" href="/edit">Edit Employees</a>
                        <a className="nav-link" href="/remove">Remove Employees</a>
                        <a className="nav-link disabled" href="/" tabindex="-1" aria-disabled="true">Disabled</a>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Nav;