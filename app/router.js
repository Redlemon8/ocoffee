import { Router } from 'express';
import catalogController from './controlllers/catalogController.js';
import homeController from './controlllers/homeController.js';

const router = Router();

router.get("/", homeController.homePage);

router.get("/catalogue", catalogController.catalogPage);
router.get("/catalogue/all", catalogController.catalogList);

router.get("/boutique", (req, res) => {
  res.render("about");
});

router.get("/produit/:id", homeController.renderOneProduct);

export default router;