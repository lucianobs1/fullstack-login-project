import 'reflect-metadata';

import cors from 'cors';
import express from 'express';
import './database';

import { routes } from './routes';

const server = express();

server.use(cors());
server.use(express.json());
server.use(routes);

server.listen(4444, () => {
  console.log('✨ Server is running ✨');
});
