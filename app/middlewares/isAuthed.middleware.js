//Middleware to block access to the users not loged
export function isAuthed(req, res, next) {

  if (! req.session.userId) {
    return res.render("login", { errorMessage: "Veuillez d'abord vous connecter" });
  }
  next();
}

