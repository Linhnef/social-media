import mongoose from 'mongoose'

async function connect() {
    try {
        await mongoose.connect('mongodb://localhost:27017/social', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
        });
        console.log('connect successfully !!!');
    } catch (erorr) {
        throw 'Connect failure !!!';
    }
}

export default { connect , mongoose }