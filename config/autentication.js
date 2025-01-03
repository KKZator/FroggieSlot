import jwt from 'jsonwebtoken';

// Define a middleware function to check for JWT authentication
export default function authenticateJWT(req, res, next) {
  const authHeader = req.headers.authorization;
  if (authHeader) {
    const token = authHeader.split(' ')[1];
    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
      if (err) {
        return res.sendStatus(403);
      }

      // Set the user object in the request for further use
      req.user = user;
      next();
    });
  } else {
    res.sendStatus(401);
  }
}