import {useState} from "react";

function FruitFieldset({ fruitName, fruitValue, handleFruitChange }) {

    // const [fruitValue, setFruitValue] = useState(0)

    return (
        <fieldset>
            {fruitName}
            <button onClick={() => handleFruitChange(fruitValue - 1 >= 0 ? fruitValue - 1 : fruitValue)}> - </button>
            {fruitValue}
            <button onClick={() => handleFruitChange(fruitValue + 1)}> +</button>
        </fieldset>
    )
}

export default FruitFieldset;