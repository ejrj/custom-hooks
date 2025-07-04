import { useState } from "react"

export const useCounter = (initialValue = 0) => {

    const [counter, setCounter] = useState(initialValue);

    const increment = (value = 1) => {    // Si no se pasa el valor, da error porque recibe el evento como parametro
        setCounter( counter + value );
    }

    const decrement = (value = 1) => {
        if ( counter === 0 ) return;
        setCounter( counter - value );
    }

    const reset = () => {
        setCounter( initialValue );
    }

    return {
        counter,
        increment,
        decrement,
        reset
    }

}
