# Apollo Server GraphQL API

This project is a GraphQL API built with Apollo Server. It provides a set of queries and mutations for managing games, authors, and reviews.

## File Structure

- `index.js`: This is the main entry point of the application. It sets up the Apollo Server and defines the resolvers for the GraphQL schema.

## Resolvers

The resolvers defined in `index.js` include:

- `Query`: This includes queries for fetching games, a single game by ID, authors, a single author by ID, reviews, and a single review by ID.
- `Game`: This includes a resolver for fetching reviews related to a specific game.
- `Review`: This includes resolvers for fetching the author and game related to a specific review.
- `Author`: This includes a resolver for fetching reviews written by a specific author.
- `Mutation`: This includes mutations for deleting a game, adding a new game, and updating an existing game.

## Running the Server

To start the Apollo server, type the following into the terminal:
```
nodemon index
```
The server is set to run on port 4000. 

## Note

Please refer to the `schema.js` file for the GraphQL schema used in this project.