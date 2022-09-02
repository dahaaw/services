const fs = require( 'fs' );
const helper = require( '..' );

module.exports = ( type = 'info', logText ) => {
    const dir = `logs/${ helper.moment.getCurrentDate( 'YYYY' ) }/${ helper.moment.getCurrentDate( 'MM' ) }`;
    const file = `${ dir }/${ helper.moment.getCurrentDate( 'DD' ) }.txt`;

    if (!fs.existsSync( dir )){
        fs.mkdirSync( dir, { recursive: true } );
    }

    const log = `${ type } | ${ logText } | ${ helper.moment.getCurrentTime() }${ helper.log.newLine }`
    fs.appendFileSync( file, log );
}