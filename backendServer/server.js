// ESM syntax is supported.
// export {}
import mongoose from "mongoose";
import express from 'express';
import { sessionRoutes, userRoutes } from './routes/index.js';
import session from "express-session";
import connectStore from "connect-mongo";
import './connection.js'
const app = express();
const MongoStore = connectStore(session);
app.disable('x-powered-by');
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(session({
    name: 'sid',
    secret: 'secret!session',
    saveUninitialized: false,
    resave: false,
    store: new MongoStore({
      mongooseConnection: mongoose.connection,
      collection: 'session',
      ttl: parseInt(1000*60*60*2) / 1000
    }),
    cookie: {
      sameSite: true,
      secure: 'production',
      maxAge: parseInt(1000*60*60*2)
    }
  }));

const apiRouter = express.Router();
app.use('/api',apiRouter);
apiRouter.use('/users', userRoutes);
apiRouter.use('/session', sessionRoutes);



app.listen(5400, () => console.log(`Listening on port ${5400}`));
