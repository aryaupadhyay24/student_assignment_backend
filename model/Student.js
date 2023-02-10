const mongoose = require('mongoose')
const { Schema } = mongoose;

const StudentSchema = new Schema({
    firstName: {
        type: String,
        required: true
    },
    middleName: {
        type: String,
       
    },
    lastName: {
        type: String,
        required: true
    },
    selectClass: {
        type: Number,
        // required: true
    },
    selectDivision: {
        type: Number,
        // required: true
    },

    rollNo: {
        type: Number,
        required: true
    },
    addressLine1: {
        type: String,
        required: true
    },
    addressLine2: {
        type: String,
        required: true,
    },
    landmark: {
        type: String,
        required: true,
    },
    city: {
        type: String,
        required: true,
    },
    pincode: {
        type: String,
        required: true,
    },
    
    date: {
        type: String,
        default: Date.now
    }


});
const student = mongoose.model('studentData', StudentSchema)
// here user is nawm of the model  and data will stored in tavble/collection  named userdatas
module.exports = student