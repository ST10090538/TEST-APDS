const mongoose = require('mongoose')

 

const postsschema = mongoose.Schema(

    {

        department: {type: String, require:true},

        issue: {type: String, require:true}

    }

)

 

module.exports = mongoose.model('Post', postsschema)