# Parent Helper

[Live demo](http://tranquil-atoll-54937.herokuapp.com/)

Parent helper is a full stack MERN application used to track your toddlers food intake, sleep routine, poop, and general notes.

The client is built using React function components. User authentication and authorization is handled with JSON web tokens stored in local storage. On retrieval of a valid token, access for users is granted across the app using reacts context API and the token is stored in local storage to be sent to the server for any further requests. User data is handled with Redux to avoid prop drilling and allow for components to only control their own state.

The server is built using Node.js and Express.js. It allows for sensitive user credentials to be encrypted using Bcrypt.js. When a user logs in it compares the provided password with the hashed password saved in the data base. On a successful compare a JSON web token is created containing the users ID is sent to the client and will be needed for any further requests to work with the database. Mongoose is used to work with a MongoDB cloud atlas cluster.

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
DBUSER = 'Your Mongo Atlas clusters username';
DBPASS = 'The users password';
DBNAME = 'The database name';
JWT_SECRET = "A unique secret for signing and decoding JWT's";
JWT_EXPIRATION = 'A expiration date for issued tokens';
```

## Demo

[Live demo](http://tranquil-atoll-54937.herokuapp.com/)
