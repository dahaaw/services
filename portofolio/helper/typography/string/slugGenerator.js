const { Op } = require( 'sequelize' );
const models = require( '../../../models' );

const slugGenerator = async ( string, table, column = 'slug' ) => {
    let forSlug = string
                    .toLowerCase()
                    .replace(/[^\w ]+/g, '')
                    .replace(/ +/g, '-');;

    const exist = await models[table].findOne({
        where: { [ column ]: { [ Op.like ]: `${ forSlug }%` } },
        order: [ [ column, 'desc' ] ],
        raw: true
    });

    if(exist){
        console.log(exist);
        let no = exist[ column ].replace( forSlug, '').replace( '-', '' );
        const plus = Number( no ) + 1;
        forSlug += `-${ plus }`;
    }

    return forSlug;
}

module.exports = slugGenerator;