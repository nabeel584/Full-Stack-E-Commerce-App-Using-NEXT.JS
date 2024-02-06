import { mongoose } from 'mongoose';

const connectToDB = async () => {
  try {
    await mongoose.connect(
      'mongodb://nabeel:nabeel123@localhost:27017/EcommerceNextJs'
    );

    console.log('Connected To Db');
  } catch (error) {
    console.log(error);
  }
};

export default connectToDB;
