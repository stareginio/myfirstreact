import { useState } from 'react';
import helloServices from '../services/helloServices';

const Hello = () => {
    // react hooks
    const [hello, setHello] = useState("");

    return helloServices.getHello();
}

export default Hello;