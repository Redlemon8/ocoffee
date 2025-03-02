import dataMapper from "../data-mapper.js";

export const loadLoggedUserInLocals = async (req, res, next) => {
  if (req.session.userId) {
    try {
      const user = await dataMapper.getUserId(req.session.userId);
      res.locals.user = user; 
    } catch (error) {
      console.error("Erreur lors du chergement de l'utilisateur: ", error);
    }
  }
  next();
};