import mongoose from 'mongoose';

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      useCreateIndex: true,
    });

    console.log(`MONGODB CONNECTED : ${conn.connection.host}`);
  } catch (err) {
    console.log(`ERROR CONNECTING TO MONGODB: ${err.message}`);
    process.exit(1);
  }
};

export default connectDB;
