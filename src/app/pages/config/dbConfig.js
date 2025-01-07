import mongoose from 'mongoose';

const DB_URI = 'mongodb://127.0.0.1:27017/Al-Mecca';

let isConnected; // Track the connection status

const connectDB = async () => {
    if (isConnected) {
        console.log('MongoDB is already connected');
        return;
    }

    try {
        const db = await mongoose.connect(DB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true, // Enable unique indexes
        });

        isConnected = db.connections[0].readyState === 1; // Connection is successful
        console.log('MongoDB connected successfully');
    } catch (error) {
        console.error('MongoDB connection failed:', error.message);
        throw error;
    }
};

export default connectDB;
