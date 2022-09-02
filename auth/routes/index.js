const auth = require( './auth' );
const controllers = require( '../controllers' );

const routes = ( app ) => {
    app.use( '/', auth );
    app.use( '/', controllers.mainController );
};

module.exports = routes;