import mongoose from 'mongoose';


let isConnected = false;

export const connectToDatabase = async () => {
    mongoose.set('strictQuery', true);


    if (isConnected) {
        console.log('Already Connected To Database');
        return;
    }

    try {

        await mongoose.connect(process.env.MONGODB_URI_LOCAL, {
            dbName: 'promptopia',
            useUnifiedTopology: true
        })

        isConnected = true;
        console.log('Connected To DB');


    } catch (error) {
        console.log(error);
    }

}