import { Router } from 'express';
import catalogController from './controlllers/catalogController.js';
import homeController from './controlllers/homeController.js';

const router = Router();

router.get("/", homeController.homePage);

router.get("/catalogue", catalogController.catalogPage);
router.get("/catalogue/all", catalogController.catalogList);

router.get("/produit", (req, res) => {
  res.render("produit");
});

export default router;