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

module.exports = {
    err,
    failValidation,
    successAdded
}