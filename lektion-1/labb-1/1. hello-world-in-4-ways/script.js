/*
    Hello World In 4 Ways

    Att få ut "Hello World" (https://sv.wikipedia.org/wiki/Hello_World) brukar vara något som ofta testas vid kontakt med nya kodspråk och tekniker.
    Nu ska vi med hjälp av JavaScript få systemet att säga Hello World på tre olika sätt.
    
    Lös gärna en del i taget, och ladda om index.html i webbläsaren vid varje löst del för att exekvera om skriptet.

    1. Genom att logga till konsolen
    2. Genom att använda alert (visar en popup-ruta)
    3.a Genom att skapa ett element och lägga till det till DOM:en
    3.b Genom att skriva det till ett befintligt element i DOM:en

*/

const hello = "Hello World!";

// 1. Logga variabeln hello till konsolen här

// NOTE: Öppna konsolen i webbläsaren, och se hur det ser ut. Prova de olika funktionerna på console (.log(), .warn() osv.) och se vad som händer.


// 2. Logga variabeln hello i en popup-ruta alert()

// NOTE: Värt att notera här är att alert() pausar exekvering av scriptet tills användaren tryckt bort rutan. Tryck bort popup-rutan med konsolen öppen så får du se vad som händer.
console.log("Loggas efter alert");

/* 
    3.a Skapa ett element och lägg till det till DOM:en
    
    * Börja med att skapa elementet (förslagsvis en p-tagg). Se till att tilldela elementet till en variabel.
    * Sätt texten inuti p-taggen till värdet på variabeln hello
    * Lägg till elementet till DOM:en
*/


// NOTE: Kontrollera nu vad som har hänt i DOM-trädet. Du kan göra det genom att öppna inspektorn (högerklicka någonstans på sidan och välj det som heter något i stil med inspektera/granska elemet. Olika mellan olika browsers)

/* 
    3.b Skriv till ett befintligt element i DOM:en
    
    * Kolla i index.html. Lokalisera ett element som du kan skriva hello world till
    * Sätt texten inuti p-taggen till värdet på variabeln hello
    * Lägg till elementet till DOM:en
*/

// NOTE: Kontrollera även här vad som har hänt i DOM-trädet. 
