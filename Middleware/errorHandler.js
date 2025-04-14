function errorHandler(err, req, res, next) {
    res.status(500).json({
        error: "Server Error",
    });
}

module.exports = errorHandler;
