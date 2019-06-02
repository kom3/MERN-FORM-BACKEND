const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let personSchema = new Schema( {
    
	
	name: {
        type: String
    },
    age: {
        type: Number
    }
});

module.exports = mongoose.model('personSchema', personSchema);
