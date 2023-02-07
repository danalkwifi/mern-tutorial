//middleware are functions that executes during the request response cycle
const errorHandler = (err, req, res, next) => {
    //is statusCode is set as the same in controller use statusCode else use 500 (URL error)
    const statusCode = res.statusCode ? res.statusCode : 500

    res.status(statusCode)

    res.json({
        message: err.message,
        //this will only work if it is in production mode, gives line number...
        stack: process.env.NODE_ENV === 'production' ? null : err.stack 
    })
}

module.exports = {
    errorHandler,
}