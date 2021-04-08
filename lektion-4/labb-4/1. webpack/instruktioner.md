Vi ska sätta upp ett projekt med webpack

Sätta upp webpack
-----------------
1.  Du behöver ha Node installerat (https://nodejs.org/en/)
2.  Verifiera att Node är installerat genom att skriva `node -v` i kommandotolken/terminalen.
    Om ett versionsnummer visas har du node installerat
3.  Börja med att initiera projektet genom att skriva `npm init` (du kan trycka enter på alla frågor som kommer)
4.  Nu ska du ha en fil som heter `package.json` i rotkatalogen
5.  Installera webpack och webpack-cli (`npm install webpack webpack-cli --save-dev`)
6.  Justera `package.json` och lägg till följande under scripts: `"build": "npx webpack"`
    Detta gör det möjligt för oss att anropa webpack
7.  Kör `npm run build` för att skapa din bundle
8.  Nu ska du ha fått en map som heter dist med ett skript som heter main.js
    Kolla i skriptfilen för att se hur skriptet har förändrats
9.  Nu ska vi lägga till möjlighet att automatiskt skapa om bundlen när filer i src ändras.
    Detta görs med `npx webpack watch`
10. Lägg till följande i package.json: `"start": "npx webpack watch"`
11. Nu kan du skriva `npm start` i konsolen/terminalen för att automatiskt övervaka filerna och bundla om dem när något ändras

Installera några npm-paket
--------------------------
1.  Installera paketet uuid, det används för att generera unika id:n (https://github.com/uuidjs/uuid#readme)
    a.  Paketet installeras genom `npm install uuid`
    b.  Importera uuid in till index.js
    c.  Generera en uuid av valfritt slag och lägg in i DOM:en
    d.  Bygg projektet genom npm run build och kolla hur resultatet ser ut i dist-foldern samt ladda om sidan i webbläsaren

2.  Installera paketet Axios, det förenklar http-requests (https://github.com/axios/axios#installing)
    a.  Paketet installeras genom `npm install axios`
    b.  Importera axios in till index.js
    c.  Gör en GET-request mot https://swapi.dev/api/films/ (se dokumentationen för hur du gör)
    d.  Iterera över resultatet och lägg in något från resultatet i DOM:en
    e.  Bygg projektet genom `npm run build` och kolla hur resultatet ser ut i dist-foldern samt ladda om sidan i webbläsaren

3.  Installera ESLint, för att kvalitetssäkra din kod (https://eslint.org/docs/user-guide/getting-started)
    a.  Paketet installeras genom `npm install eslint --save-dev` (flaggan --save-dev anger att paketet används i utvecklingssyfte och har ingen effekt vid produktion)
    b.  Sätt upp en konfigurationsfil `npx eslint --init`
        Du får nu följande frågor, välj svaren:
        How would you like to use ESLint? · `To check syntax, find problems, and enforce code style`
        ✔ What type of modules does your project use? · `JavaScript modules (import/export)`
        ✔ Which framework does your project use? · `None of these`
        ✔ Does your project use TypeScript? · `No`
        ✔ Where does your code run? · `browser`
        ✔ How would you like to define a style for your project? · `Use a popular style guide`
        ✔ Which style guide do you want to follow? · `Airbnb: https://github.com/airbnb/javascript`
        ✔ What format do you want your config file to be in? · `JSON`
        ✔ Would you like to install them now with npm? · `Yes`
    c.  Testa lintern genom att skriva `npx eslint src` (detta kör lintern på hela src-katalogen)
    d.  Korrigera lint-problemen och kör sedan `npx eslint src` igen

