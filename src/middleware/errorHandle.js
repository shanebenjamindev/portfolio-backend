const notFound = (req, res, next) => {
    const error = new Error(`not found : ${req.orginalUrl}`);
    res.status(404);
    next(error);
}

//Error Handler

const errorHandler = (err, req, res, next) => {
    const statusCode = res.statusCode == 200 ? 500 : res.statusCode;
    req.status(statusCode);
    res.json({
        message: err?.message,
        stack: err?.stack,
    });
};

module.exports = { errorHandler, notFound }