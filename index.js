import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { typeDefs } from "./schema.js";
import db from './_db.js';

//(determine how we respond to queries for different data on the graph )
const resolvers = {
    Query: {
        games() {
            return db.games;
        },
        game(_, args) {
            return db.games.find((game) => game.id === args.id)
        },
        reviews() {
            return db.reviews;
        },
        review(_, args ) {
             return db.reviews.find((review) => review.id === args.id)
        },
        authors() {
            return db.authors;
        },
        author(_, args) {
            return db.authors.find((author) => author.id === args.id)
        }
    }
}

//server setup
const server = new ApolloServer({    
    typeDefs, //(descriptions of our data types and the relationship they have with other data types)
    resolvers //(determine how we respond to queries for different data on the graph )
})

const { url } = await startStandaloneServer(server, {
    listen: { port: 4000}
})

console.log('Server ready at port 4000');
