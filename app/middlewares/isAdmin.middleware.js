// Middleware to block access to the registeration page if role is not admin
export function isAdmin(req, res, next) {

  if (! res.locals.user || res.locals.user.role !== "admin") {
    return res.status(404).redirect("404");
  }
  next();
}