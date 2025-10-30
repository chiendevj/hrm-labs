function sendResponse(req, res, next) {
    res.success = (data, message = 'Success', statusCode = 200) => {
        res.status(statusCode).json({
            status: 'success',
            message,
            data,
        });
    };

    res.created = (data, message = 'Resource created') => {
        res.status(201).json({
            status: 'success',
            message,
            data,
        });
    };

    res.badRequest = (message = 'Bad Request') => {
        res.status(400).json({
            status: 'error',
            message,
            data: null,
        });
    };

    res.notFound = (message = 'Not Found') => {
        res.status(404).json({
            status: 'error',
            message,
            data: null,
        });
    };

    res.internalError = (message = 'Internal Server Error') => {
        res.status(500).json({
            status: 'error',
            message,
            data: null,
        });
    };

    next();
}

module.exports = sendResponse;
