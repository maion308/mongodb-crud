import { MongoClient, ObjectId } from 'mongodb'

const uri = 'mongodb://localhost'
const db = 'game'
const collection = 'reviews'
const client = new MongoClient(uri)

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

