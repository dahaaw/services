const { techsServices } = require('../../services');
const { responseHelper } = require( '../../helper' );

const getAll = async ( req, res ) => {
    const techs  = await techsServices.getAll();
    res.status(200).json({techs})
}

const add = async ( req, res ) => {
    techsServices.add( req.body )
    .then( d => responseHelper.successAdded( res, 'project added', d.id ))
    .catch( e => responseHelper.err( res, e ));
};

module.exports = {
    getAll,
    add
}