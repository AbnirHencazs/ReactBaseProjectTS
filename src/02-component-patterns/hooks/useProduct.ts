import { useState } from "react";
import { onChangeArgs, Product } from "../interfaces/interfaces";

interface useProductArgs{
    product: Product
    onChange?: (args: onChangeArgs) => void
}

export const useProduct = ( { onChange, product }: useProductArgs ) => {
    const [ counter, setCounter ] = useState(0)

    const increaseBy = (value: number) => {
        const newValue = Math.max( counter + value, 0 )
        setCounter(newValue)
        /**
         * Como indicamos que 'onChange' es opcional, 
         * TS nos dice que no puede invocar un objeto que POSIBLEMENTE sea 'undefined'.
         * 
         * Lo resolvemos comprobando que existe antes de ejecutar
         */
        onChange && onChange({ count: newValue, product })
    }

    return { counter, increaseBy }
}