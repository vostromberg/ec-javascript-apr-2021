__todoListApi__

Api för att skapa och hantera objekt.

För att starta api:
1. Se till att node är installerat. För Mac med M1-chip behöver node-versionen vara minst `15.10`. Kontrollera genom att öppna ett terminalfönster och skriva node -v. 
2. Applikationen är beroende av att ett antal paket är installerade som finns definierade i `package.json`. För att installera öppna ett terminalfönster, se till att sökvägen i terminalen pekar på todoListApi (ex. `C:\Code\win20-oktober-orebro-javascript\todoListApi`). Kör sedan kommandot `npm install` (eller `npm i`), detta ser till att paketen i `package.json` installeras. Paketen ligger i foldern node_modules. Den foldern brukar man inte versionshantera i git, därför ligger den vanligen med i `.gitignore`.
3. Nu är alla beroenden på plats och applikationen kan köras igång. Detta görs genom kommandot `npm start`. Om allt gått som det ska bör det i terminalen stå `API server started on: 3001`. Detta betyder att api-servern är igång och lyssnar på port 3001.
4. För att anropa endpoints i api:et kan det göras från samma dator som det är igång på mot adressen `http://localhost:3001/`. Lista över anrop finns nedan:


GET: `http://localhost:3001/` => Hämta alla todo's

POST: `http://localhost:3001/` => Skapa en todo  
innehåll i body:  
`{  
    title: string,  
    description: string (ej obligatoriskt)  
}`

GET: `http://localhost:3001/:id` => Hämta en todo på angivet ID

PUT: `http://localhost:3001/todo/:id` => Uppdatera en todo på angivet ID
innehåll i body  
`{  
    title: string,  
    description: string (ej obligatoriskt),
    completed: boolean 
}`

DELETE: `http://localhost:3001/todo/:id` => Radera en todo på angivet ID

I projektet finns en fil som heter `todo-list.postman_collection.json`.  
Den kan importeras in i applikationen Postman, där api:et kan utforskas ytterligare.

