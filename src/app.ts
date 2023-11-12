require('dotenv').config();
const path = require('path');

import express from 'express';
import morgan from 'morgan';
import helmet from 'helmet';
import cors from 'cors';

import {notFound, errorHandler} from './middlewares';
import api from './api';
import MessageResponse from './interfaces/MessageResponse';

const app = express();

app.set('view engine', 'ejs');
app.set('views', './src/views');
app.use(express.static(path.join(__dirname, 'public')));

app.use(morgan('dev'));
app.use(helmet());
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.render('pages/index', {
    title: 'Home',
    path: '/',
  });
});

app.use('/api/v1', api);

app.use(notFound);
app.use(errorHandler);

export default app;
