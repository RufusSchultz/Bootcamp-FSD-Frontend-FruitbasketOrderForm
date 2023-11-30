import './App.css'
import {useState} from "react";

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

    return (
        <>
            <h1>Fruitmand bezorgservice</h1>
            <fieldset>
                🍌 Bananen
                <button
                    onClick={() => setBananaValue(bananaValue - 1 >= 0 ? bananaValue - 1 : bananaValue)}> - </button>
                {bananaValue}
                <button onClick={() => setBananaValue(bananaValue + 1)}> +</button>
            </fieldset>
            <fieldset>
                🍓 Aardbeien
                <button
                    onClick={() => setStrawberryValue(strawberryValue - 1 >= 0 ? strawberryValue - 1 : strawberryValue)}> - </button>
                {strawberryValue}
                <button onClick={() => setStrawberryValue(strawberryValue + 1)}> +</button>
            </fieldset>
            <fieldset>
                🍏 Appels
                <button onClick={() => setAppleValue(appleValue - 1 >= 0 ? appleValue - 1 : appleValue)}> - </button>
                {appleValue}
                <button onClick={() => setAppleValue(appleValue + 1)}> +</button>
            </fieldset>
            <fieldset>
                🥝 Kiwi's
                <button onClick={() => setKiwiValue(kiwiValue - 1 >= 0 ? kiwiValue - 1 : kiwiValue)}> - </button>
                {kiwiValue}
                <button onClick={() => setKiwiValue(kiwiValue + 1)}> +</button>
            </fieldset>
            <button onClick={() => {
                setBananaValue(0);
                setStrawberryValue(0);
                setAppleValue(0);
                setKiwiValue(0);
            }}>Reset
            </button>

            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Voornaam</label>
                    <input
                        type="text"
                        name="name"
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>

                <div>
                    <label htmlFor="surname">Achternaam</label>
                    <input
                        type="text"
                        name="surname"
                        onChange={(e) => setSurname(e.target.value)}
                    />
                </div>

                <div>
                    <label htmlFor="age">Leeftijd</label>
                    <input
                        type="number"
                        name="age"
                        placeholder="0"
                        onChange={(e) => setAge(parseInt(e.target.value))}
                    />
                </div>

                <div>
                    <label htmlFor="zipcode">Postcode</label>
                    <input
                        type="text"
                        name="zipcode"
                        placeholder="1234AB"
                        onChange={(e) => setZipcode(e.target.value)}
                    />
                </div>

                <div>
                    <p>
                        <label htmlFor="delivery_frequency">Bezorgfrequentie</label>
                    </p>
                    <select
                        name="delivery_frequency"
                        id="delivery_frequency"
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

                <button type="submit">Verzend</button>


            </form>
        </>
    )
}

export default App
