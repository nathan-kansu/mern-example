# Example MERN Stack

Example MERN stack app using MongoDB, Mongoose, Express, React, Node, Passport and Socket IO.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

To run this app locally, you will need to install [Node.js](https://nodejs.org/en/download/) onto your machine.

### Installing

[Clone](https://help.github.com/en/github/creating-cloning-and-archiving-repositories/cloning-a-repository) the repository.

```
git clone --depth=1 git@github.com:nathan-kansu/mern-example.git <YOUR_PROJECT_NAME>
```

#### Client

Navigate to the "client" folder and install the required frontend packages via [npm](https://www.npmjs.com/).

```
cd client && npm install
```

#### Server

Navigate to the project root and install the required "server" packages.

```
cd .. && npm install
```

#### Database

Create a new MongoDB database in either your local MongoDB instance (if you have one), or via a 'database-as-a-service' product, such [MongoDB Atlas](https://www.mongodb.com/cloud/atlas).

Create two collections `users` and `categories` and import their respective data contained in the `database` folder.

When you have created your database and collections, create a `.env` file (using `.env.example` as a reference) and update the file to contain your database credentials.

### Usage

Start the application via `npm`.

```
npm run dev
```

You can now access the app via [http://localhost:3000](http://localhost:3000/).

To log into the app use either of the example accounts.

| Email         | Password |
| ------------- | -------- |
| larry@foo.com | test     |
| karen@foo.com | test     |

## License

This project is licensed under the MIT License.
