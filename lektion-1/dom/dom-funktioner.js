// Skapar ett div-element
const a = document.createElement("div");
a.innerHTML = "<span>Hej</span><span class='a-span'>Hej</span>"; // a är nu lika med <div><span>Hej</span></div>
a.id = "my-div"; // a är nu lika med <div id="my-div"><span>Hej</span></div>
document.body.appendChild(a); //Lägger till diven till DOM:en

const b = a.getElementsByTagName("span"); //Letar efter span-element i a-diven
b[0].innerText = "ABC"; // Uppdaterar texten på första span:en
b[1].innerText = "DEF"; // Uppdaterar texten på andra span:en

const d = document.getElementById("my-div"); // hämtar elementet med angivet id från DOM:en
d.innerText = "All sallad i dallas kallas dallassallad!"; //Byter text i elementet (span:en kommer försvinna)
d.remove(); //Tar bort elementet från DOM:en
document.removeChild(d); //Tar också bort elementet från DOM:en

// QuerySelector
// Hittar element i DOM:en baserat på selektorer (ung. som i css)

//querySelector returnerar första träffen, returnerar null om inget element matchar queryn
document.querySelector("span"); // elementtyp
document.querySelector("#my-div"); // id
document.querySelector(".a-span"); // klassNamn

//querySelectorAll returnerar alla träffar, returnerar alltid en NodeList (tom om inga element finns)
document.querySelectorAll("span");
document.querySelectorAll(".a-span");