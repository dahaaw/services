module.exports = ( req, type = 'access_token' ) => {
    return req?.cookies[ type ];
}