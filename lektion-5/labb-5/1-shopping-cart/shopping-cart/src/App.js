import logo from "./logo.svg";
import "./App.css";

function App() {
  // Här är vår shoppingCart (Notera att varken state eller props används. Se denna data som statisk)
  const shoppingCart = [
    {
      id: 1,
      title: "Banana",
      quantity: 8,
      pricePerItem: 5,
    },
    {
      id: 2,
      title: "Apple",
      quantity: 2,
      pricePerItem: 4,
    },
    {
      id: 3,
      title: "Pear",
      quantity: 8,
      pricePerItem: 5,
    },
    {
      id: 4,
      title: "Orange",
      quantity: 16,
      pricePerItem: 6,
    },
  ];

  return (
    <div className="App">
      <ul>
        {/*
        // Rendera objekten i shopping-carten här, börja med att rendera allt i samma komponent. Prova sedan att bryta isär till mindre komponenter
        // Rendering av samlingar sker vanligast med hjälp av .map(item => <li></li>)
        */}
      </ul>
      <p>{/* Rendera totalkostnad här */}</p>
    </div>
  );
}

export default App;
