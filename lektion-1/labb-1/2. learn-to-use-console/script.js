/*
    I den här övningen ska vi undersöka vad som händer när vi loggar olika saker till konsolen.

    Förr så var loggningar till konsolen och alerts i princip det enda sättet att felsöka JavaScript.
    Mycket har hänt sedan dess och utvecklingsmiljöer och webbläsare har blivit mycket mer sofistikerade.
    
    Loggningar till konsolen är trots det ett väldigt smidigt sätt att snabbt få output från programmet som sedan kan analyseras.

    Vi ska logga olika typer av objekt, se vad som händer vid förändringar i objekt

*/

const person = {
    name: "John Doe",
    age: 42
};

// Logga person till konsolen

// Ändra name eller age på person

// Logga person till konsolen igen

/* 
    NOTE:
    Ser båda objekten likadana ut i konsolen? Och vilken version av objektet visas? Vad tror du att det beror på?

    När ett objekt loggas till konsolen så kan vi titta på objektet, och det som loggas är egentligen en _referens_ till variabeln (som i sin tur representerar en plats i minnet) som objektet lagras på.
    Därför är det objektet som det ser ut i minnet som vi tittar på, och båda visar samma sak för att det refererar till samma objekt.

    För att undvika detta kan vi antingen göra en kopia av objektet eller göra en JSON-sträng av objektet

    För att göra en kopia: 
        {...person} (detta kallas för en spread) eller Object.assign(person, {})
    
    För att konvertera till JSON-sträng: 
        JSON.stringify(person);
*/

//Gör samma övning som ovan fast med kopior på objekten istället.


const array = [1,2,3];

//logga array till konsolen

//Avkommentera följande rad
// console.log("Array: ", array);

/* 
    Om man loggar mycket så kan det vara bra att "namnge" sina loggningar som ovanför. 
    Det hjälper till att veta vart i koden som loggningen kommer ifrån.
    Något som också kan vara bra är att logga tidpunkt och det ska vi göra nedanför.
*/

// Skapa ett datum

// Logga tidpunkt tillsammans med valfritt värde 