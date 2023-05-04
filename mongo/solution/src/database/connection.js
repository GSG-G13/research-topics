import {} from 'dotenv/config';
import mongoose from 'mongoose';

const connection = () => mongoose.connect(process.env.DB_URI)

export default connection;