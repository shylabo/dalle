import mongoose from 'mongoose';

const connectDB = (url) => {
  mongoose.set('strictQuery', true);
  mongoose
    .connect(url)
    .then(() => console.log('connected to db'))
    .catch((err) => {
      console.log('failed to connect to db');
      console.log(err);
    });
};

export default connectDB;
