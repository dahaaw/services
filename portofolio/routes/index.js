const projects = require( './projects' );
const techs = require( './techs' );
const controllers = require( '../controllers' );

const routes = ( app ) => {
    app.use( '/projects', projects );
    app.use( '/techs', techs );
    app.use( '/', controllers.mainController );
};

module.exports = routes;