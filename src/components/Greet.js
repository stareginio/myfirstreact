import Emoji from './Emoji';

const Greet = (props) => {
    return (
        <div>
            <p><Emoji symbol="👋" /> Hello {props.name}</p>
        </div >
    )
}

export default Greet;