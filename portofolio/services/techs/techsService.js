const { techs } = require('../../models');
const { typographyHelper } = require( '../../helper' );
 
const getAll = () => {
    return techs.findAll()
}

const add = async ( data ) => {
    return techs.create( data );
};

module.exports = {
    getAll,
    add
}