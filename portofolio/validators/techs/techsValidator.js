const validator = require( 'validator' );
const { responseHelper } = require( '../../helper' ); 

const add = ( req, res, next ) => {
    const { name } = req.body;
    let reason = [];

    if( !name ) reason.push( 'name is required' );

    if( reason.length ) return responseHelper.failValidation( res, reason[0] );
    
    next();
}

module.exports = {
    add
}