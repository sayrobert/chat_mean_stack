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
            MessageModel.create(body, (error, newUser) => {
                if(error){ // Mongo error
                    return reject(error)
                }
                else{ // User registrated
                    return resolve(newUser);
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

//

/*
Export
*/
    module.exports = {
        addchat,
        listchat
    }
//