import { useEffect, useState } from 'react';
import './App.css';
import OptionSelection from './optionSelection';

function App() {

  const [mattresses, setMattresses] = useState({});
  const [selection, setSelection] = useState({});
  const [cart, setCart] = useState([]);

  useEffect(()=> {
    fetch('mattresses.json')
    .then((data)=> data.json())
    .then(json => {
      setMattresses(json.mattresses);
      setSelection(json.mattresses[Object.keys(json.mattresses)[0]]);
    });
  }, []);

  const add = (item) =>  {
    setCart([...cart, item]);
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>saatva</h1>
        <div>
          <img src="images/shopping-cart-solid.svg" alt="" />
          <div class="counter">{cart.length}</div>
        </div>
      </header>
      <div className="content">
        <div className="mattress-image">
          <img src={selection.imageFileName} alt="" />
        </div>
        <div className="choose">
          <h4>
            Choose Your Mattress
          </h4>
        </div>
        <div className="select-mattress">
          <div>
            <h5>Select Mattress type</h5>
          </div>
          <OptionSelection
            options={mattresses}
            selection={selection}
            select={setSelection}
          />
        </div>
        <div className="preview">
          <span>{selection.name}</span>
          <span>{selection.price}</span>
        </div>
        <div className="add-to-cart">
          <button onClick={() => add(selection)}>Add to Cart</button>
        </div>
      </div>
    </div>
  );
}

export default App;
