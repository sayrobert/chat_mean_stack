/*
Imports
*/
    const express = require('express');
    const chatRouter = express.Router({ mergeParams: true });
    const { addchat } = require('./chat.controller');

    const { checkFields } = require('../../services/request.checker');
    const { sendBodyError, sendFieldsError, sendApiSuccessResponse, sendApiErrorResponse } = require('../../services/server.response');
//

/*
Routes definition
*/
    class ChatRouterClass {
        routes(){
            // HATEOAS
            chatRouter.get('/', (req, res) => {
                res.json('HATEOAS for auth');
            });
            
            // Register
            chatRouter.post('/addchat', (req, res) => {
                // Vérifier la présence du body
                if( typeof req.body === 'undefined' || req.body === null ) sendBodyError( res, 'No body data provided' );

                // Vérifier les champs du body
                const { miss, extra, ok } = checkFields(['user_id', 'libelle'], req.body);
                
                // Vérifier la variable ok est true
                if( !ok ){ sendFieldsError( res, 'Bad fields provided', miss, extra ) }

                // Use controller function
                addchat(req.body)
                .then( apiResponse => res.json(apiResponse) )
                .catch( apiResponse => res.json(apiResponse) )
            });

        };

        init(){
            this.routes();
            return chatRouter;
        }
    }
//

/*
Export
*/
    module.exports = ChatRouterClass;
//