module.exports = ( req ) => {
    return req?.headers?.authorization?.split(' ')?.[1];
}