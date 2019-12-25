const mongoose = require('mongoose');
const dotenv = require ('dotenv').config();
const ts = require('../dbManagement/tvScheme');
const url = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_HOST}${process.env.DB_COLLECTION}?retryWrites=true&w=majority`;

const options = {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
};

mongoose

    .connect(url, options)
    .then(db => console.log('connected to: ', db.connection.name))
    .catch(err => console.error('some error occurred', err));




// mongoose.connection.on('open', () => {
//     ts.find({}, (err, result) => {
//
//         if (err)
//
//             throw err;
//
//         console.log(result);
//
//     });
//
// });

module.exports ={ ts,url,options}