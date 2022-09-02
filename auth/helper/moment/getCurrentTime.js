const moment = require( 'moment' );

module.exports = ( format = 'HH:mm:ss' ) => {
    return moment().format( format );
}