const { projectsService } = require('../../services');
const { responseHelper } = require( '../../helper' );

const getAll = async ( req, res ) => {
    const projects  = await projectsService.getAll();
    res.status(200).json({projects})
}

const add = async ( req, res ) => {
    projectsService.add( req.body )
    .then( d => responseHelper.successAdded( res, 'project added', d.id ))
    .catch( e => responseHelper.err( res, e ));
};

module.exports = {
    getAll,
    add
}