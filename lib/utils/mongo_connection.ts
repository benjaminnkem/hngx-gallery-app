import mongoose from 'mongoose'

export const connectToDB = async () => mongoose.connect(process.env.MONGODB_URI!)

