import session from "express-session";

export const sessionSetup = session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: true,
  cookie: {
    maxAge: 60 * 60 * 1000,
    secure: false // HTTP en local --> En prod: secure: proces.env.NODE_ENV === 'production'
    //httpOnly: true,
  } 
});