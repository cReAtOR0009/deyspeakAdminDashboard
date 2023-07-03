const mongoose = require("mongoose");

module.exports = async () => {
    try {
        let connectionString = process.env.DB_URL;
        if(process.env.DEV == "true") {
            console.log("development mode");
            connectionString = process.env.DB_URL_DEV;
        }
        console.log(connectionString);
        await mongoose.connect(connectionString, {
            useNewUrlParser: true,
        });
        console.log('Database connected')
    } catch (error) {
        console.log('Database connectivity error', error);
        throw new Error(error);
    }
}