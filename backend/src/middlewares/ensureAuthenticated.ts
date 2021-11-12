import { NextFunction, Request, Response } from 'express';
import { verify } from 'jsonwebtoken';

function ensureAuthenticated(
  request: Request,
  response: Response,
  next: NextFunction,
) {
  const authHeader = request.headers.authorization;

  if (!authHeader) {
    throw new Error('JWT token is missing');
  }

  const [, token] = authHeader.split(' ');
  const secret = '7e4f29b77429202024e916268abc41ba';

  try {
    const decoded = verify(token, secret);

    const { sub } = decoded;

    next();
  } catch (error) {
    throw new Error('Invalid JWT token');
  }
}

export { ensureAuthenticated };
