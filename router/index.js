/*eslint-env node, es6 */
'use strict';

module.exports = (app, server) => {
    //setting up PATH
    const SERVICE_PATH = '/discount.svc/api';
    const V1_PATH = '/v1';

    //setting upt the routes
    const promo_url = SERVICE_PATH+V1_PATH+'/promo';

    app.use(promo_url, require('./routes/promocode')());
};