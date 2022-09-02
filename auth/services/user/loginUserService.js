const { _users } = require( '../../models' );
const bcrypt = require( 'bcrypt' );
const { Op } = require( 'sequelize' );

module.exports = ( username, password ) => {
    return new Promise( async ( resolve, reject ) => {
        const exist = await _users.findOne({
            where: {
                [Op.or]: [ { username }, { email: username } ]
            }
        });
        
        if( !exist ) return reject( 'invalid username or email' );
        const truePassword = await bcrypt.compareSync( password, exist.password );
        
        if( !truePassword ) return reject( 'invalid username or email' );

        return resolve( exist );
    })
}