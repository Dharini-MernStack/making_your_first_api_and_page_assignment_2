const express = require('express');
const app = express();

const httpStatusCodes = {
    200: "OK: The request has succeeded. The meaning of this status depends on the HTTP method used.",
    201: "Created: The request has been fulfilled, resulting in the creation of a new resource.",
    204: "No Content: The server successfully processed the request, but there is no content to return.",
    400: "Bad Request: The server cannot process the request due to client-side errors (e.g., malformed syntax).",
    401: "Unauthorized: Authentication is required to access the requested resource.",
    403: "Forbidden: The server understands the request but refuses to authorize it.",
    404: "Not Found: The server has not found anything matching the request URI. This is often caused by a missing page or resource.",
    405: "Method Not Allowed: The HTTP method used is not allowed for the requested resource.",
    429: "Too Many Requests: The user has sent too many requests in a given amount of time (rate limiting).",
    500: "Internal Server Error: The server encountered an unexpected condition that prevented it from fulfilling the request.",
    502: "Bad Gateway: The server received an invalid response from an upstream server.",
    503: "Service Unavailable: The server is temporarily unable to handle the request due to overloading or maintenance.",
    504: "Gateway Timeout: The server did not receive a timely response from an upstream server."
};

app.get('/status-info', (req, res) => {
    const code = parseInt(req.query.code);

    if (!code || !httpStatusCodes[code]) {
        return res.status(400).json({
            error: "Bad Request: Invalid or missing status code."
        });
    }

    res.json({
        status: code,
        message: httpStatusCodes[code]
    });
});

const PORT = 3001;
app.listen(PORT, () => {
    console.log(`Status Code API is running on http://localhost:${PORT}`);
});