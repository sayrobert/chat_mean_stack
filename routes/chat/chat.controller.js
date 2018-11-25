/*
Import
*/
    const MessageModel = require('../../models/chat.model');
    const UserModel = require('../../models/user.model');
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
                else{ // Mongo ok list
                    return resolve(messages);
                };
            });
        });
    };

    const deletechat = body => {
        return new Promise( (resolve, reject) => {
            UserModel.findOne({ _id: body.user_id}, (error, user) => {
                if(user){ // User exist
                    // Delete message of the user
                    MessageModel.remove({ _id: body.id, user_id: body.user_id }, (error, message) => {
                        if(error){ // Mongo error
                            return reject(error)
                        }
                        else{ // User registrated
                            return resolve(message);
                        };
                    });
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