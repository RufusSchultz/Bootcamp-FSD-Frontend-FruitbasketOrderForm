
import './App.css'
import {useState} from "react";

function App() {
    const [bananaValue, setBananaValue] = useState(0);
    const [strawberryValue, setStrawberryValue] = useState(0);
    const [appleValue, setAppleValue] = useState(0);
    const [kiwiValue, setKiwiValue] = useState(0);

  return (
    <>
        <h1>Fruitmand bezorgservice 🍌🍓🍏🥝</h1>
        <fieldset>
            🍌 Bananen
            <button onClick={() => setBananaValue(bananaValue - 1 >= 0 ? bananaValue - 1 : bananaValue)}> - </button>
            {bananaValue}
            <button onClick={() => setBananaValue(bananaValue + 1)}> + </button>
        </fieldset>
        <fieldset>
            🍓 Aardbeien
            <button onClick={() => setStrawberryValue(strawberryValue - 1 >= 0 ? strawberryValue - 1 : strawberryValue)}> - </button>
            {strawberryValue}
            <button onClick={() => setStrawberryValue(strawberryValue + 1)}> + </button>
        </fieldset>
        <fieldset>
            🍏 Appels
            <button onClick={() => setAppleValue(appleValue - 1 >= 0 ? appleValue - 1 : appleValue)}> - </button>
            {appleValue}
            <button onClick={() => setAppleValue(appleValue + 1)}> + </button>
        </fieldset>
        <fieldset>
            🥝 Kiwi's
            <button onClick={() => setKiwiValue(kiwiValue - 1 >= 0 ? kiwiValue - 1 : kiwiValue)}> - </button>
            {kiwiValue}
            <button onClick={() => setKiwiValue(kiwiValue + 1)}> + </button>
        </fieldset>
        <button onClick={() => {
            setBananaValue(0);
            setStrawberryValue(0);
            setAppleValue(0);
            setKiwiValue(0);
        }}>Reset</button>
    </>
  )
}

export default App
