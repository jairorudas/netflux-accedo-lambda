'use strict';
const request = require('request')

module.exports.movies = (event, context, callback) => {
    let response = {}
    request('https://sela-test.herokuapp.com/assets/hkzxv.json', { json: true }, (err, resp, body) => {

        if (err) {
            response = {
                statusCode: 500,
                body: JSON.stringify({
                    message: `${err}`,
                    input: event,
                }),
            };
            callback('error', response);
        } else {
            response = {
                statusCode: 200,
                headers: {
                    "Access-Control-Allow-Origin": "*", // Required for CORS support to work
                    "Access-Control-Allow-Credentials": true // Required for cookies, authorization headers with HTTPS
                },
                body: JSON.stringify({
                    message: body,
                    input: event,
                }),
            };
            callback(null, response);
        }

    })

    // Use this code if you don't use the http event with the LAMBDA-PROXY integration
    // callback(null, { message: 'Go Serverless v1.0! Your function executed successfully!', event });
};