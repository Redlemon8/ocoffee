import session from "express-session";

export const sessionSetup = session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: true,
  cookie: {
    maxAge: 1 * 60 * 60 * 1000, // 1H
    secure: false // HTTP en local
  } 
});