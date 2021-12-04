import '../styles/Nav.css';
import icon from '../styles/snail_icon.png';

const Nav = () => {
    return (
        <nav className="navbar fixed-top navbar-expand-lg navbar-dark">
            <div className="container-fluid">
                <a className="navbar-brand" href="/">
                    Snail

                    <img
                        src={icon}
                        id="icon"
                        alt="snail icon"
                        width="20"
                        height="20"
                        className="d-inline-block align-text-center"
                    />
                </a>


                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <div className="navbar-nav" id="navbarNavAltMarkup">
                        <a className="nav-link" aria-current="page" href="/myfirstreact">Home</a>
                        <a className="nav-link" href="https://stareginio.github.io/myfirstreact/employees">Employees</a>
                        <a className="nav-link" href="https://stareginio.github.io/myfirstreact/add">Add Employees</a>
                        <a className="nav-link" href="https://stareginio.github.io/myfirstreact/remove">Remove Employees</a>
                        <a className="nav-link" href="https://stareginio.github.io/myfirstreact/edit">Edit Employees</a>
                        <a className="nav-link disabled" href="/" tabindex="-1" aria-disabled="true">Disabled</a>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Nav;

// add/remove "/myfirstreact"