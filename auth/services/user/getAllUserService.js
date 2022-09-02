const { _users } = require( '../../models' );

module.exports = () => {
    return _users.findAll();
}