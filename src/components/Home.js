import '../styles/Home.css';

import Button from './Button';
import Greet from './Greet';

// functional component = stateless component
function Home() {
    return (
        <div className="Home">
            <Button />

            <hr />

            <div id="greet">
                <Greet name="Snail Sr." />
                <Greet name="Snail Jr." />
            </div>

            <hr />

            <p>
                <img src="https://i.gifer.com/7dTK.gif"
                    className="Home-gif"
                    alt="snail gif">
                </img>
            </p>

            <a
                className="Home-link"
                href="https://www.youtube.com/watch?v=Tt7bzxurJ1I"
                target="_blank"
                rel="noopener noreferrer"
            >
                here's a cute dancing stick bug video
            </a>

            <img id="smol"
                src="https://i.pinimg.com/originals/a6/06/21/a60621da98a79bfbdc0e3dd5524a32d3.gif"
                alt="smol snail">
            </img>
        </div>
    );
}

export default Home;
