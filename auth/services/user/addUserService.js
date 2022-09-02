const { _users } = require( '../../models' );
const bcrypt = require( 'bcrypt' );
const { Op } = require( 'sequelize' );

module.exports = ( data ) => {
    return new Promise ( async ( resolve, reject ) => {
        const { username } = data;
        const exist = _users.findOne({
            where: {
                [Op.or]: [ { username }, { email: username } ]
            }
        });

        if( exist ) return reject( 'user already exist' );

        data.password = bcrypt.hashSync( data.password, process.env.SALT_LENGTH );
        
        _users.create( data )
        .then( d => resolve( d ));
    })
};