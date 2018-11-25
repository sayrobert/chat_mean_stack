/*
Import
*/
    const MessageModel = require('../../models/chat.model');
//

/*
Functions
*/
    const addchat = body => {
        // Save user
        return new Promise( (resolve, reject) => {
            MessageModel.create(body, (error, message) => {
                if(error){ // Mongo error
                    return reject(error)
                }
                else{ // User registrated
                    return resolve(message);
                };
            });
        });
    };

    const listchat = body => {
        // Save user
        return new Promise( (resolve, reject) => {
            MessageModel.find({}, (error, messages) => {
                if(error){ // Mongo error
                    return reject(error)
                }
                else{ // User registrated
                    return resolve(messages);
                };
            });
        });
    };

    const deletechat = body => {
        return new Promise( (resolve, reject) => {
            MessageModel.remove({ _id: body.id }, (error, message) => {
                if(error){ // Mongo error
                    return reject(error)
                }
                else{ // User registrated
                    return resolve(message);
                };
            });
        });
    };

//

/*
Export
*/
    module.exports = {
        addchat,
        listchat,
        deletechat
    }
//