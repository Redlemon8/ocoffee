import 'dotenv/config';

import express from 'express';
import router from './app/router.js';
import path from "node:path";
import fileUpload from "express-fileupload";
import { sessionSetup } from './app/middlewares/session-setup.middlewares.js';
import { loadLoggedUserInLocals } from './app/middlewares/load-user-locals.middleware.js';
import { fileURLToPath } from 'url';
import { dirname } from 'path';


const app = express();

app.set("trust proxy", 1);

app.set("view engine", "ejs");
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
app.set("views", path.join(__dirname, "views"));

app.set("views", path.join(__dirname, "views"));

app.use(fileUpload());

app.use(express.static(path.join(__dirname, "public")));

app.use(express.urlencoded({ extended: true }));

app.use(sessionSetup);

app.use(loadLoggedUserInLocals);

app.use(router);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`🚀 Server started at http://localhost:${port}`);
});