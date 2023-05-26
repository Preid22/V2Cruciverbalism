#newGameManager helper funcs

---

    * The function generateClueArray takes in an object (puzzle, written as clues in the func) and returns an array of objects, each with two properties; clueString and num (the corresponding first cell number.) This array is formed using .map(). Because .map() outputs an array we return clues.map(). The function run on each element by .map iterates over the array of clue strings ("1. Attention getter") and at each one declares vars num and clueString, .splits the clue arg and assigns those to num and clueString via de-structuring. Then, an object containing properties num and clueString is returned which outputs with the necessary vals.

A function that takes in the CW JSON and outputs an array containing objects that have fields for num and clueString
function generateClueArray(clues){
return clues.map((clue)={
const [num, clueString] = clue.split('.');
return {
num,
clueString
};
});
};

    * The function generateClueMap also iterates over the JSON data to output an object containing clues and their corresponding numbers. Instead of using the .map() method and outputting an array of objects, generateClueMap uses the .reduce() function to output an object.

    It takes in the clues JSON and returns the output of the reduce method called on the clues. The reduce callback is given accum and current args, and an empty object is supplied as the initial accum value. The clue strings are .split() in the same manner as generateClueArray, as well as the destructuring assignment to variables. The main difference is that in the next step we assign the num variable as a key in the accum object with the clueString as the property, we then return the accum object.

A function that takes in the CW JSON and outputs an object with fields for num and clueString
function generateClueMap(clues){
return clues.reduce((accum, cur)=>{
const [num, clueString] = cur.split('.');
accum[num] = clueString;
return accum;
},{})
}

In the function generateCells we take two args, letters (puzzle.grid: ['A','H','E','M','.']) and size (an int for number of cols and rows). We return the output of using the .map() method on letters. The callback func for letters.map takes two args, letter and index with letter being the letter string val and index being the index number (duh!). Within the callback we declare a row variable which is determined by taking the floor (largest integer less than or equal to given val, rounded down) of current index value divided by the size value. We also declare a column value which is equal to the modulo of index % size. Finally we declare an empty object, letterObj. Go on to declare key props in letterObj for letter, row, and column with the respective vals as properties. Then return letterObj.

function generateCells(letters*puzzle.grid*, size*puzzle.size.rows*) {
return letters.map((letter, index) => {
const row = Math.floor(index / size); //on first row index is < size, > on subsequent rows so dividing gets us row value
const column = index % size;
const letterOb = {};
letterOb.letter = letter;
letterOb.row = row;
letterOb.column = column;
return letterOb;
});
}

function generateClueArray(clues) {
return clues.map((clue) => {
const [num, clueString] = clue.split(".");
return {
num,
clueString,
};
});
}

function generateClueMap(clues) {
return clues.reduce((accum, cur)=>{
const [num, clueString] = cur.split(".");
accum[num] = clueString;
return accum;
},{})
}

## #Express routing

- Had some confusion surrounding the relationship btwn newGameManager, the express routing in index.js, and how that works within the context of the app.

Questions/points of confusion: - What is require? - Require is a built in function of Node.js that imports functions, objects, or values from other files or modules in the application. - When require is called it is given a file path and it returns the exported objects from that path, in order for require to work the target file MUST have the desired code exported \** What I think is happening: in newGameManager we have several functions defined. Only one returns the data object (getCrossWordData) and the rest are helper funcs.
When we write out *exports.getCrossWordData*, exports is an object so .getCrossWordData creates a property with that name in the exports object and with *exports.getCrossWordData = getCrossWordData* we assign the function getCrossWordData to that exports object property and it can be called outside of the file.
Then, in index.js we use *require\* to pull in "./newGameManager". Since we have assigned getCrossWordData to the exports object in newGameManager we can reference it using a destructuring assignment. We use {curly braces} to destructure the object and by creating a const variable { getCrossWordData } we extract that particular function from the exported object and simultaniously assign it to a variable, getCrossWordData, in the current scope (express server in index.js)

- Feeling better about my understanding of newGameManager. Going to try and drill down into Express. (https://expressjs.com/en/4x/api.html#express)

  - The express() function is a top level function exported by the express module, we do this by assigning the variable 'express' to the pulled in module
    - (const express = require("express"));
  - We then assign the variable 'app' to the express function

    - (const app = express())

  - This is the conventional way of denoting the express application
  - The app object has several methods that can be used for

    - Routing HTTP requests
    - Configuring middleware
    - Rendering HTML views
    - Registering a template engine (??)

      ** The app object may also be referred to from the request object and the response object (req.app and res.app) **

      - In this application we will only be using USE, GET, and LISTEN

      - app.use mounts a specified middleware function

  -

** DIGRESSION **

On useEffect: in this context (Game component) useEffect is called to bring in our game data. In the callback function we use fetch, and this provides us with our 'effect' (the data is fetched and we can use it). We call useEffect with an empty dependancy array after the callback arg so that the effect is only called once on the initial mount.

&&& VOCAB/GLOSSARY &&&

_<-Express>_

EXPRESS is a framework that works ontop of Node.js to simplify app and API development. It is primarily used for developing server side applications and APIs. In the context of this project it is being used to set up a server to listen for requests and respond with data. There are other ways to use EXPRESS but I will mostly limit the scope to what I'm using here.
In this case we are making use of Express' capabilities to:

- Define ROUTES
- Handle HTTP requests
- Generate responses
  ? Static file serving: crossword data?
  ? App configuration: (port, environment variable)

  I believe that Express will also serve as the functional backend of the application, need to get a bettter handle on this.

_<-Express/Routing>_

- ROUTING refers to how an application will respond to a client's REQUEST to a specified endpoint. The REQUEST will always be a URL(path) and a specified HTTP request method.
- ROUTES will take the following structure:

  **app.METHOD(PATH, HANDLERfunc)** ---> app.get('/greeting', (req, res) => {
  res.send('Hi!');
  };
  );
  ^ Where app is the instance of Express, METHOD is an HTTP request method, PATH is a defined server path and HANDLER is the supplied function to be executed when the route is matched. In this case a callback function that uses the req

  _<-Request/Response Objects - (req, res)>_

  - Req and Res objects are common idioms across web frameworks, and are not just used in Express. They are used to represent the HTTP REQUEST sent TO and the RESPONSE FROM the SERVER. They appear as the first two args in the callback function of a route handler (req, res).

    - REQ is an object that represents the incoming HTTP request.
    - It contains several properties that describe the request, such as:

      - query string (?name=John)
      - params (/users/:id)
      - body (data from a POST request)
      - Many more but these are some of the basics

    - RES is an object that represents the response that our Express app sends when it recieves an HTTP request.
    - The RES object has several methods that can be used to send a response to the client, the most common are:
      - res.send() - sends a response of various types (string, object, array, etc.)
      - res.sendFile() - sends a file as an octet stream
      - _res.json() - sends a JSON response_
      - res.render() - renders a view template

  _<...Request/Response Objects>_

  _<-Route path>_

  - ROUTE PATH refers to the URL PATTERN that a route SHOULD MATCH. It defines the specific URL/URL pattern that the server should listen for when HANDLING A REQUEST.

  - The ROUTE PATH is a component of the ROUTE DEFINITION ( see below )
    A route can contain STATIC and DYNAMIC segments, static segments remain the same for all requests but dynamic segments are placeholders that capture variable values from the incoming request URL.

    \*STATIC path:
    app.get('/home', (req, res) => {
    // Route handler for requests to '/home'
    });
    ^ this route will ONLY match requests to '/home', nothing else, '/home' is the PATH

    \*DYNAMIC path:
    app.get('/users/:id', (req, res) => {
    // Route handler for requests to '/users/:id'
    });
    ^ this route will match requests to '/users/1', '/users/2', 'users/3', etc. The ':' means that the VALUE of that segment will be assigned as a parameter, accessible through req.params (req.params.id in this case). '/users/:id' is the PATH.

  _<...Route path>_

  _<-Route definition>_

  The ROUTE DEFINITION encompasses the entire declaration and configuration of a route.
  The DEFINITION includes the ROUTE PATH, the HTTP METHOD (GET,POST,PUT,DELETE etc) and the corresponding handler or middleware.
  The DEFENITION specifies WHAT SHOULD HAPPEN when a REQUEST is recieved that MATCHES the ROUTE PATH and the HTTP METHOD.
  Typically defined using methods provided by framework such as app.get(), app.post() etc.

  app.get('/users/:id', (req, res) => {
  // Route handler
  })

  This is a ROUTE DEFINITION, it contains the HTTP method (.get), the ROUTE PATH ('users/:id') and and the ROUTE HANDLER func

  _<...Route definition>_

_<...Express/Routing>_

_<-Express/StaticFiles>_

- Express has a built-in middleware function, express.static, that serves static files such as image, CSS, JS files etc.
- The function signature is:
  **express.static(root, [options])**
  ^ Where root is the root dir from which assets will be served
  ^ Options is an object that contains options for the middleware
  _<...Express/StaticFiles>_

_<...Express>_
