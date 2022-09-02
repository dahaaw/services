const { projects } = require('../../models');
const { typographyHelper } = require( '../../helper' );
 
const getAll = () => {
    return projects.findAll()
}

const add = async ( data ) => {
    const slug = await typographyHelper.string.slugGenerator( data.name, 'projects' );
    data.slug = slug;

    if(!data.start) data.start = null;
    if(!data.end) data.end = null;

    return projects.create( data );
};

module.exports = {
    getAll,
    add
}