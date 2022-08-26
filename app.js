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
        // await createListing(client, games)
        // await findAll(client)
        await findById(client, ObjectId("6308561a5ce17d1aed197476"))
        await updateListRating(client, ObjectId("6308561a5ce17d1aed197477"), 9)
    } catch (error) {
        console.error(error)
    } finally {
        await client.close()
    }
}

main().catch(console.error)

// CRUD Operations
// 1. Create
const createListing = async (client, document) => {
    const result = await client 
    .db(db)
    .collection(collection)
    .insertMany(document)

    console.log(`${result.insertedCount} listings created with id(s)`)
    console.log(result.insertedIds)
}

// 2a. Read
const findAll = async (client) => {
    const cursor = await client 
    .db(db)
    .collection(collection)
    .find({})
    console.log(`${cursor.matchedCount} listing(s) found`)
    if(cursor) {
        console.log('here is your collection')
    }
    for await(const doc of cursor) {
        console.log(doc)
    }
}

// 2b. Read (find listing by id by id)
const findById = async (client, listId) => {
    const result = await client
    .db(db)
    .collection(collection)
    .findOne({_id: listId})

    if(result) {
        console.log(`Found listing with id ${listId}`)
        console.log(result)
    } else {
        console.log(`No listing found with id: ${listId}`)
    }
}

// 3. Update
const updateListRating = async (client, listId, updateRating) => {
    const result = await client 
    .db(db)
    .collection(collection)
    .updateOne({_id: listId}, {$set: {rating: updateRating}})

    if(result) {
        console.log(`${result.modifiedCount} listing updated`)
    } else {
        console.log(`No listing found with id: ${listId}`)
    }
}