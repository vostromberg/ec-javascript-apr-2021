/*
    Vi ska lista objekt i en kundvagn.

    1. För varje element ska ett artikel-objekt skapas och läggas in i listan av varor.

    2. Räkna ut totalsumman på alla objekt i kundvagnen

    Förslag på utbyggnad:
    1. Gör det möjligt att ta bort objekt
    2. Gör det möjligt att ändra antal av en artikel (kom ihåg att uppdatera summan)

*/

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

function createItemRow(item){
    const item = document.createElement("li");
    /*
        Fyll på med information om objektet i listan:
        * Titel
        * Antal
        * Styckepris
        * Radpris (styckepris * antal)
    */
    return item;
}

function calculateTotal(){
    //Ersätt med totalen av objekten (förslag, använd reduce());
    const sum = 0; 
    return sum;
}

function createItemList(){
    const itemList = document.createElement("ul");
    //Skapa en itemRow för varje objekt i listan och lägg in i itemList

    return itemList;
}

function createShoppingCart(){
    //1. Skapa listan
    //2. Räkna ut totalen
    //3. Lägg till listan och totalen i #shopping-cart
}
