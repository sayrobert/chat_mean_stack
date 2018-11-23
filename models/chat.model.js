/*
Imports & configs
*/
    const mongoose = require('mongoose');
    const { Schema } = mongoose;
//

/*
Model definition
*/
    const messageSchema = new Schema({
        user_id: String,
        libelle: String
    })
//

/*
Export
*/
    const MessageModel = mongoose.model('message', messageSchema);
    module.exports = MessageModel;
//
