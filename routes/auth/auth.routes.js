/*
Imports
*/
    const express = require('express');
    const authRouter = express.Router({ mergeParams: true });
    const { register, login } = require('./auth.controller');

    const { checkFields } = require('../../services/request.checker');
    const { sendBodyError, sendFieldsError, sendApiSuccessResponse, sendApiErrorResponse } = require('../../services/server.response');
//

/*
Routes definition
*/
    class AuthRouterClass {
        routes(){
            // HATEOAS
            authRouter.get('/', (req, res) => {
                res.json('HATEOAS for auth');
            });
            
            // Register
            authRouter.post('/register', (req, res) => {
                // Vérifier la présence du body
                if( typeof req.body === 'undefined' || req.body === null ) sendBodyError( res, 'No body data provided' );

                // Vérifier les champs du body
                const { miss, extra, ok } = checkFields(['first_name', 'last_name','email','password'], req.body);
                
                // Vérifier la variable ok est true
                if( !ok ){ sendFieldsError( res, 'Bad fields provided', miss, extra ) }

                // Use controller function
                register(req.body)
                .then( apiResponse => res.json(apiResponse) )
                .catch( apiResponse => res.json(apiResponse) )
            });

            // Login
            authRouter.post('/login', (req, res) => {
                // Vérifier la présence du body
                if( typeof req.body === 'undefined' || req.body === null ) sendBodyError( res, 'No body data provided' );

                // Vérifier les champs du body
                const { miss, extra, ok } = checkFields(['email', 'password'], req.body);
        
                // Vérifier la variable ok est true
                if( !ok ){ sendFieldsError( res, 'Bad fields provided', miss, extra ) }

                // Use controller function
                login(req.body)
                .then( apiResponse => res.json(apiResponse) )
                .catch( apiResponse => res.json(apiResponse) )
            });
        };

        init(){
            this.routes();
            return authRouter;
        }
    }
//

/*
Export
*/
    module.exports = AuthRouterClass;
//