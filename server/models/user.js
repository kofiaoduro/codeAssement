const mongoose = require('mongoose')
main().catch(err => console.log(err));

async function main() { //we are connecting to the use databse in our local host
  await mongoose.connect('mongodb://127.0.0.1:27017/User');

}

// we are defining our schema for a user entity

const Schema = mongoose.Schema
const userSchema = new Schema({
    name:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    }
})


const User = mongoose.model('User', userSchema)

// here i created a single entity to be inserted into my databse
const Kevin = new User({name: "Kevin", email: "kevin@gmail.com"})
Kevin.save()