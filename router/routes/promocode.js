/*eslint no-console: 0, no-unused-vars: 0, no-shadow: 0, new-cap: 0*/
/*eslint-env node, es6 */
'use strict';
var express = require('express');

module.exports = function() {
    var app = express.Router();
    
    //mocking promocodes
    const promocodes = [
        {
            "code": "ESPM30",
            "discount": 30
        },
        {
            "code": "ESPM50",
            "discount": 50
        }
    ];

    //promocode Router
    app.get('/:code', (req, res) => {
        var promocode = req.params.code;
        if(promocode!=null){
            var result;
            var status;
            
            for(var i in promocodes){
                var code = promocodes[i].code;
                var discount = promocodes[i].discount;
                console.log("enter value : ",promocode);
                console.log(code);
                if(promocode === code){
                    status = 200;
                    result = {
                        "code":promocodes[i].code,
                        "discount":promocodes[i].discount
                    };
                    break;
                 }else{
                    status = 402;
                    result = {
                        "message":"Bad Request! Invalid promo code."
                    };
                }
            }


            res.status(status);
            res.json(result);
        }
        res.status(402);
        res.end('Bad request!')
    });

    return app;
};