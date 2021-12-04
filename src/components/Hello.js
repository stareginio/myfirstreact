import { useEffect, useState } from 'react';
import helloServices from '../services/HelloServices';

// class - stateful function
// function - stateless
const Hello = () => {
    // react hooks useState
    const [hello, setHello] = useState("hello, snail");

    // react hooks useEffect
    // axios - tool for http request promises
    // promises - asynch processes
    useEffect(() => {
        helloServices.getHello()
            .then(response => {
                setHello(response.data)
            })
            .catch(err => {
                console.log("Something went wrong...")
            })
    }
    )

    return hello;
}

export default Hello;