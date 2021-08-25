const mongoose = require('mongoose');

const dbConection = async() => {
    try {
        await mongoose.connect(process.env.MONGODBCOMPASS, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false,
            useCreateIndex: true
        });
        console.log('Base de datos online');
    } catch (error) {
        console.log(error);
        throw new Error('Error a la hora de iniciar la base de datos')
    }
}

module.exports = {
    dbConection
}