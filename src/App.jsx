import './App.css'
import {useState} from "react";
import Button from "./components/Button.jsx";
import FruitFieldset from "./components/FruitFieldset.jsx";
import PersonalDetailField from "./components/PersonalDetailField.jsx";


function App() {
    const [bananaValue, setBananaValue] = useState(0);
    const [strawberryValue, setStrawberryValue] = useState(0);
    const [appleValue, setAppleValue] = useState(0);
    const [kiwiValue, setKiwiValue] = useState(0);

    const [formState, setFormState] = useState({
        name: "",
        surname: "",
        age: 0,
        zipcode: "",
        delivery_frequency: "weekly",
        delivery_time_of_day: "",
        comments: "",
        agrees_to_terms: false,
    });

    function handleFormChange(e) {
        const newValue = e.target.type === "checkbox" ? e.target.checked : e.target.value;

        setFormState({
            ...formState,
            [e.target.name]: newValue,
        });
    }

    function handleSubmit(e) {
        e.preventDefault();
        console.log(`Je fruitmand met ${bananaValue} bananen, ${strawberryValue} aardbeien, ${appleValue} appels en ${kiwiValue} kiwi's is onderweg, ${formState.name}!`)
        console.log(formState);
    }

    function handleFruitReset() {
        setBananaValue(0);
        setStrawberryValue(0);
        setAppleValue(0);
        setKiwiValue(0);
    }

    return (
        <>
            <h1>Fruitmand bezorgservice</h1>
            <FruitFieldset
                fruitName="🍌 Bananen"
                fruitValue={bananaValue}
                handleFruitChange={setBananaValue}
            />
            <FruitFieldset
                fruitName="🍓 Aardbeien"
                fruitValue={strawberryValue}
                handleFruitChange={setStrawberryValue}
            />
            <FruitFieldset
                fruitName="🍏 Appels"
                fruitValue={appleValue}
                handleFruitChange={setAppleValue}
            />
            <FruitFieldset
                fruitName="🥝 Kiwi's"
                fruitValue={kiwiValue}
                handleFruitChange={setKiwiValue}
            />
            <Button
                buttonText="Reset"
                onClick={handleFruitReset}
            />

            <form onSubmit={handleSubmit}>
                <div>
                    <PersonalDetailField
                        title="Voornaam"
                        inputType="text"
                        inputName="name"
                        inputId="name"
                        inputValue={formState.name}
                        handleChange={handleFormChange}
                    />
                </div>
                <div>
                    <PersonalDetailField
                        title="Achternaam"
                        inputType="text"
                        inputName="surname"
                        inputId="surname"
                        inputValue={formState.surname}
                        handleChange={handleFormChange}
                    />
                </div>
                <div>
                    <PersonalDetailField
                        title="Leeftijd"
                        inputType="text"
                        inputName="age"
                        inputId="age"
                        inputValue={formState.age}
                        handleChange={handleFormChange}
                        placeholder="0"
                    />
                </div>
                <div>
                    <PersonalDetailField
                        title="Postcode"
                        inputType="text"
                        inputName="zipcode"
                        inputId="zipcode"
                        inputValue={formState.zipcode}
                        handleChange={handleFormChange}
                        placeholder="1234AB"
                    />
                </div>
                <div>
                    <p>
                        <label htmlFor="delivery_frequency">Bezorgfrequentie</label>
                    </p>
                    <select
                        name="delivery_frequency"
                        id="delivery_frequency"
                        value={formState.delivery_frequency}
                        onChange={handleFormChange}
                    >
                        <option value="weekly">Iedere week</option>
                        <option value="other_weekly">Om de week</option>
                        <option value="monthly">Iedere maand</option>
                    </select>
                </div>
                <p>
                    <input
                        type="radio"
                        value="daytime"
                        name="delivery_time_of_day"
                        id="daytime_delivery"
                        checked={formState.delivery_time_of_day === "daytime"}
                        onChange={handleFormChange}
                    />
                    <label htmlFor="daytime_delivery">Overdag</label>
                    <input
                        type="radio"
                        value="evening"
                        name="delivery_time_of_day"
                        id="evening_delivery"
                        checked={formState.delivery_time_of_day === "evening"}
                        onChange={handleFormChange}
                    />
                    <label htmlFor="evening_delivery">'s Avonds</label>
                </p>

                <div>
                    <label htmlFor="comments">Opmerking</label>
                </div>
                <div>
                    <textarea
                        name="comments"
                        id="comments"
                        cols="30"
                        rows="10"
                        value={formState.comments}
                        onChange={handleFormChange}
                    />
                </div>

                <div>
                    <input
                        type="checkbox"
                        name="agrees_to_terms"
                        id="agrees_to_terms"
                        checked={formState.agrees_to_terms}
                        onChange={handleFormChange}
                    />
                    <label htmlFor="agrees_to_terms">Ik ga akkoord met de voorwaarden</label>
                </div>

                <Button
                    buttonText="Verzend"
                    buttonType="submit"
                />


            </form>
        </>
    )
}

export default App
