import "reflect-metadata";
import {createConnection} from "typeorm";
import express, { Application, request } from "express";
import cors from 'cors';
import morgan from "morgan";
import Router from "./routes";
// import cookieParser from "cookie-parser";
// import session from "express-session"

import dbConfig from './config/database'


const PORT = process.env.PORT || 8000;

const app: Application = express();

app.use(express.json());
app.use(morgan("tiny"));
app.use(express.static("public"));
app.use(cors());

app.use(Router);

// app.use(cookieParser());

// app.use(session({
//     secret: "hellolol",
//     resave: false,
//     saveUninitialized: false,
// }));



createConnection(dbConfig).then(_connection => {
    console.log(_connection)
    app.listen(PORT, () => {
      console.log("Server is running on port", PORT);
    });
  }).catch(err => {
    console.log("Unable to connect to db", err);
    process.exit(1)
  })
