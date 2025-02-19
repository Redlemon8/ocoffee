import 'dotenv/config';

import express from 'express';
import router from './app/router.js';
import path from "node:path";
import fileUpload from "express-fileupload";

const app = express();

app.set("view engine", "ejs");
app.set("views", path.join(import.meta.dirname, "./app/views"));

app.use(fileUpload());

app.use(express.static(path.join(import.meta.dirname, "public")));

app.use(express.urlencoded({ extended: true }));

app.use(router);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`🚀 Server started at http://localhost:${port}`);
});