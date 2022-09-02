const { userService, authService } = require('../../services');
const helper = require( '../../helper' );

const getAll = async ( req, res ) => {
    const projects  = await userService.getAll();
    res.status(200).json({projects})
}

const add = async ( req, res ) => {
    userService.add( req.body )
    .then( d => helper.response.successAdded( res, 'project added', d.id ))
    .catch( e => helper.response.err( res, e ));
};

const login = async ( req, res ) => {
    const { username, password } = req.body;
    userService.login( username, password )
    .then( d => {
        const access_token = authService.createToken( d.id );
        const refresh_token = authService.createRefreshToken( d.id );

        res.cookie( 'access_token', access_token );
        res.cookie( 'refresh_token', refresh_token );

        helper.response.success( res, {
            access_token,
            refresh_token
        } )
    })
    .catch( e => helper.response.fail( res, e ));
}

const authenticate = async ( req, res ) => {
    let token = helper.token.getFromBeareer( req );
    if( !token ) token = helper.token.getFromCookie( req );
    if( !token ) return helper.response.fail( res, 'not authenticated' );
    
    const verified = authService.authenticate( token );
    if( !verified ) return helper.response.fail( res, 'not authenticated' );
    
    const profile = await userService.getProfile( verified.id );

    helper.response.success( res, profile );
}

module.exports = {
    getAll,
    add,
    login,
    authenticate
}