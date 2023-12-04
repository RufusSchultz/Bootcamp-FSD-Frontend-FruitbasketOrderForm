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

    const [name, setName] = useState("");
    const [surname, setSurname] = useState("");
    const [age, setAge] = useState(0);
    const [zipcode, setZipcode] = useState("");
    const [deliveryFrequency, setDeliveryFrequency] = useState("Iedere week");
    const [deliveryTimeOfDay, setDeliveryTimeOfDay] = useState("");
    const [comments, setComments] = useState("");
    const [agreedWithTerms, setAgreedWithTerms] = useState(false);

    function handleSubmit(e) {
        e.preventDefault();
        console.log(`Je fruitmand met ${bananaValue} bananen, ${strawberryValue} aardbeien, ${appleValue} appels en ${kiwiValue} kiwi's is onderweg, ${name}!
Naam: ${name} ${surname}
Leeftijd: ${age}
Postcode: ${zipcode}
Bezorgfrequentie: ${deliveryFrequency}
Bezorgmoment van de dag: ${deliveryTimeOfDay}
Opmerkingen: ${comments}
Voorwaarden geaccepteerd: ${agreedWithTerms} 
`
        )
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
                        handleChange={setName}
                    />
                </div>
                <div>
                    <PersonalDetailField
                        title="Achternaam"
                        inputType="text"
                        inputName="surname"
                        handleChange={setSurname}
                    />
                </div>
                <div>
                    <PersonalDetailField
                        title="Leeftijd"
                        inputType="text"
                        inputName="age"
                        handleChange={setAge}
                        placeholder="0"
                    />
                </div>
                <div>
                    <PersonalDetailField
                        title="Postcode"
                        inputType="text"
                        inputName="zipcode"
                        handleChange={setZipcode}
                        placeholder="1234AB"
                    />
                </div>
                <div>
                    <p>
                        <label htmlFor="delivery_frequency">Bezorgfrequentie</label>
                    </p>
                    <select
                        name="delivery_frequency"
                        onChange={(e) => setDeliveryFrequency(e.target.value)}
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
                        checked
                        onChange={(e) => setDeliveryTimeOfDay(e.target.value)}
                    />
                    <label htmlFor="delivery_time_of_day">Overdag</label>
                    <input
                        type="radio"
                        value="evening"
                        name="delivery_time_of_day"
                        onChange={(e) => setDeliveryTimeOfDay(e.target.value)}
                    />
                    <label htmlFor="delivery_time_of_day">'s Avonds</label>
                </p>

                <div>
                    <label htmlFor="comments">Opmerking</label>
                </div>
                <div>
                    <textarea
                        name="comments"
                        cols="30"
                        rows="10"
                        onChange={(e) => setComments(e.target.value)}
                    />
                </div>

                <div>
                    <input
                        type="checkbox"
                        name="agrees_to_terms"
                        onChange={(e) => setAgreedWithTerms(!agreedWithTerms)}
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
