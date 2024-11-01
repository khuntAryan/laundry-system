import mongoose from "mongoose";

type ConnectionObject = {
    isConnected?: number;
};
const connection: ConnectionObject = {};

async function dbConnect() {
    if (connection.isConnected) {
        console.log("db is already connected")
        return;
    }
    try {
        const db = await mongoose.connect(process.env.MONGO_URI!)
        connection.isConnected = db.connections[0].readyState
        console.log("db connected successfully")
    } catch (error: any) {
        console.log("failed to connect the db", error)
    }
}

export default dbConnect