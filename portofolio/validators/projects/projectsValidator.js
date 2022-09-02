const validator = require( 'validator' );
const { responseHelper } = require( '../../helper' ); 

const add = ( req, res, next ) => {
    const { name, start, end } = req.body;
    let reason = [];

    if( !name ) reason.push( 'name is required' );
    if( start && !validator.isDate( start ) ) reason.push( 'invalid date of start' );
    if( end && !validator.isDate( end ) ) reason.push( 'invalid date of end' );

    if( reason.length ) return responseHelper.failValidation( res, reason[0] );
    
    next();
}

module.exports = {
    add
}