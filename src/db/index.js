import mongoose from 'mongoose'
import { DB_NAME } from '../constants.js'

const connectDB = async () => {
    try {
        const uri = process.env.MONGODB_URL
    if (!uri) {
        throw new Error('MONGODB_URL is not set')
        }

const connectionInstance = await mongoose.connect(uri, { dbName: DB_NAME })

        console.log(`\nMONGODB CONNECTED SUCCESSFULLY !!! DB HOST: ${connectionInstance.connection.host}`)
    } catch (error) {
        console.log('MONGODB CONNECTION ERROR', error)
        process.exit(1)
    }
}

export default connectDB