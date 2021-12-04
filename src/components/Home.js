import logo from './logo.gif';
import '../styles/Home.css';

import Button from './Button';
import Employee from './Employee';
import Greet from './Greet';
import Hello from './Hello';
import Nav from './Nav';

// functional component = stateless component
function Home() {
    return (
        <div className="Home">
            <Nav />
            <header className="Home-header">

                <img src={logo} className="Home-logo" alt="logo" />

                <h1> s n a i l </h1>

                <p id="hello"> {Hello()} </p>

                <Button />

                <hr />

                <div id="greet">
                    <Greet name="Snail Sr." />
                    <Greet name="Snail Jr." />
                </div>

                <hr />

                <img src="https://i.gifer.com/7dTK.gif"
                    className="Home-gif"
                    alt="snel gif">
                </img>

                <a
                    className="Home-link"
                    href="https://www.youtube.com/watch?v=Tt7bzxurJ1I"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    here's a cute dancing stick bug video
                </a>

            </header>
            <img id="smol"
                src="https://i.pinimg.com/originals/a6/06/21/a60621da98a79bfbdc0e3dd5524a32d3.gif"
                alt="smol snel">
            </img>
        </div>
    );
}

export default Home;
