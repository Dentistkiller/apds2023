const mongoose = require('mongoose')

const carschema = mongoose.Schema(
    {
        id: {type: String, required:true},
        name: {type: String, required:true}
    }
)

module.exports = mongoose.model('Car', carschema) 