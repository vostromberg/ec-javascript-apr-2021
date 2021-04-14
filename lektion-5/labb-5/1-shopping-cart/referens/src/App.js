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

  const totalSum = shoppingCart.reduce((prev, curr) => prev + (curr.pricePerItem * curr.quantity), 0);

  return (
    <div>
      <ul>
        {shoppingCart.map(item => <li key={item.id}>{`${item.title} ${item.quantity} ${item.pricePerItem} ${item.quantity * item.pricePerItem}`}</li>)}
      </ul>
      <p>Total sum {totalSum}</p>
    </div>
  );
}

export default App;
