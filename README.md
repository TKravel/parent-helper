# Parent Helper

Parent helper is a fullstack MERN application used to track your childs food intake, sleep routine, poop, and notes.

## Installation

From the root level of the working directory run

```bash
npm install
```
To start the client run
```bash
cd client
npm start
```
In a second terminal run the following to start the server
```bash
node index.js
```

## Requirements

Parent helper connects to MongoDb Atlas. Free shared accounts can be created at https://www.mongodb.com/cloud/atlas.

Create a .env file which will require the following enviroment variables
```javascript
DBUSER="Your Mongo Atlas clusters username"
DBPASS="The users password"
DBNAME="The database name"
JWT_SECRET="A unique secret for signing and decoding JWT's"
JWT_EXPIRATION="A expiration date for issued tokens"
```

## Demo
A working demo can be found at http://tranquil-atoll-54937.herokuapp.com/


