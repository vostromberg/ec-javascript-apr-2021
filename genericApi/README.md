__genericApi__

Api för att skapa och hantera objekt.  
Api:et kan användas för att göra CRUD-operationer på den typ av objekt som önskas, vilket gör att det går att labba ihop front-end-applikationer som man vill.

För att starta api:
1. Se till att node är installerat. För Mac med M1-chip behöver node-versionen vara minst `15.10`. Kontrollera genom att öppna ett terminalfönster och skriva node -v. 
2. Applikationen är beroende av att ett antal paket är installerade som finns definierade i `package.json`. För att installera öppna ett terminalfönster, se till att sökvägen i terminalen pekar på todoListApi (ex. `C:\Code\win20-oktober-orebro-javascript\todoListApi`). Kör sedan kommandot `npm install` (eller `npm i`), detta ser till att paketen i `package.json` installeras. Paketen ligger i foldern node_modules. Den foldern brukar man inte versionshantera i git, därför ligger den vanligen med i `.gitignore`.
3. Nu är alla beroenden på plats och applikationen kan köras igång. Detta görs genom kommandot `npm start`. Om allt gått som det ska bör det i terminalen stå `Generic Item API server started on: 3002`. Detta betyder att api-servern är igång och lyssnar på port 3001.
4. För att anropa endpoints i api:et kan det göras från samma dator som det är igång på mot adressen `http://localhost:3002/`. Lista över anrop finns nedan:


GET: `http://localhost:3002/:route/` => Hämta alla objekt på given route (routen skapas automatiskt om den inte finns)
ex. `http://localhost:3002/cars/` skulle kunna hålla en samling med bilar.

POST: `http://localhost:3002/:route/` => Skapa ett objekt  
innehåll i body: objekt med dina egenskaper

GET: `http://localhost:3002/:route/:id` => Hämta ett objekt på angivet ID  

PUT: `http://localhost:3002/:route/:id` => Uppdatera ett objekt på angivet ID  
Det data du skickar i body skrivs över eller in på objektet

DELETE: `http://localhost:3002/:route/:id` => Radera ett objekt på angivet ID

I projektet finns en fil som heter `generic-api.postman_collection.json`.  
Den kan importeras in i applikationen Postman, där api:et kan utforskas ytterligare.

