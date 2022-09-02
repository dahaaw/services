const { _users, _user_roles } = require( '../../models' );
const helper = require( '../../helper' );
const { fail } = require('../../helper/response');

module.exports = async ( id ) => {
    const user = await _users.findByPk( id, { 
        raw: true
    } );

    // log not found user
    if ( !user ) return helper.log.write( 'error', `user with id ${ id } not found` );

    const role = await _user_roles.findByPk( user.role_id );
    console.log( {user, role})

    const { role_id, password, updatedAt, ...dataUser } = user;
    dataUser.role = role.name;

    return dataUser;
}