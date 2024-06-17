export const errorHandlerMiddleware = (err, req, res) => {
  const msg = err.message || "Something went wrong";
  const statusCode = err.status || 500;
  res.status(statusCode).json({ msg });
};
