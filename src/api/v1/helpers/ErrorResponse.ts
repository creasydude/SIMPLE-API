class ErrorResponse extends Error {
    constructor(message: string, statusCode: number) {
        super(message);
        this.statusCode = statusCode;
    }
    statusCode: number;
}

export default ErrorResponse;