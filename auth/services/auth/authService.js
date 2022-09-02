const jwt = require( 'jsonwebtoken' );
 
const generateToken = ( id, duration ) => {
    const token = jwt.sign( { id }, process.env.PRIVATE_KEY, { expiresIn: duration } );
    return token;
}

const createToken = ( id ) => {
    const duration = 60 * 60 * ( process.env.TOKEN_EXPIRES | 1 );
    const token = generateToken( id, duration );
    return token;
}

const createRefreshToken = ( id ) => {
    const duration = 60 * 60 * 24 * ( process.env.REFRESH_TOKEN_EXPIRES | 1 );
    const token = generateToken( id, duration );
    return token;
}

const authenticate = ( token ) => {
    return jwt.verify( token, process.env.PRIVATE_KEY, ( err , userID ) => {
        if( err ) return false;
        return userID;
    } );
}

module.exports = {
    createToken,
    createRefreshToken,
    authenticate
}