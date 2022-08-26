import { MongoClient, ObjectId } from 'mongodb'

const uri = 'mongodb://localhost'
const db = 'game'
const collection = 'reviews'
const client = new MongoClient(uri)

let games = [
    {
        name: 'Cyberpunk 2077',
        rating: 9.5,
        reviews:[
            {
                username: "Gamer_Mike",
                review: "Best open world game out there!"
            },
            {
                username: 'NPC_Charlie',
                review: "Fun and addictive thrill ride"
            },
            {
                username: "Accolade_Empire",
                review: 'Non-stop action, fun and excitement'
            }
                ]
            },
    {
        name: 'Dying Light 2',
        rating: 8.3,
        reviews:[
            {
                username: "Gamer_Mike",
                review: "Scary AF"
            },
            {
                username: 'NPC_Charlie',
                review: "Staying human is hard"
            },
            {
                username: "Accolade_Empire",
                review: 'Zombie bashing fun'
            }
        ]
    },
    {
        name: 'Way of The Hunter',
        rating: 9.5,
        reviews:[
            {
                username: "Gamer_Mike",
                review: "50 Miles of open world hunting fun"
            },
            {
                username: 'NPC_Charlie',
                review: "Realistic hunting game, "
            },
            {
                username: "Accolade_Empire",
                review: 'Non-stop action, fun and excitement'
            }
        ]
    },
    {
        name: 'Ghostwire Tokyo',
        rating: 8.2,
        reviews:[
            {
                username: "Gamer_Mike",
                review: "Update pending check back soon!"
            },
            {
                username: 'NPC_Charlie',
                review: "Visualistically Stunning"
            },
            {
                username: "Accolade_Empire",
                review: 'Still new to this one, check back soon!'
            }
                ]
            }
]
            
const main = async () => {
    try {
        await client.connect()
        console.log('connected to mongodb')
    } catch (error) {
        console.error(error)
    } finally {
        await client.close()
    }
}

main().catch(console.error)


const createListing = async (client, document) => {
    const result = await client 
    .db(db)
    .collection(collection)
    .insertMany(document)
}
