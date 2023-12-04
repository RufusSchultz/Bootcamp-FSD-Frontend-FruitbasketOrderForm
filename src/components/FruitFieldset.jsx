import {useState} from "react";

function FruitFieldset({fruitName, fruitValue, handleFruitChange}) {

    // const [fruitValue, setFruitValue] = useState(0)

    return (
        <fieldset className="fruit_card">
            {fruitName}
            <div className="fruit_counter_set">
                <button onClick={() => handleFruitChange(fruitValue - 1 >= 0 ? fruitValue - 1 : fruitValue)}> -</button>
                {fruitValue}
                <button onClick={() => handleFruitChange(fruitValue + 1)}> +</button>
            </div>
        </fieldset>
    )
}

export default FruitFieldset;