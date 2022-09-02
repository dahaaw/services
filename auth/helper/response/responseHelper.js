const failValidation = ( res, message ) => {
    res
        .status( 400 )
        .json({
            success: false,
            message
        })
}

const err = (res, e) => {
    res
        .status( 500 )
        .json({
            success: false,
            message: e
        })
}

const successAdded = ( res, message, id ) => {
    res
        .status( 201 )
        .json({
            success: true,
            message,
            id
        })
}

const success = ( res, data ) => {
    res
        .status( 200 )
        .json({
            success: true,
            data
        });
}

const fail = ( res, message ) => {
    res
        .status( 400 )
        .json({
            success: false,
            message
        })
}

module.exports = {
    err,
    fail,
    failValidation,
    successAdded,
    success
}