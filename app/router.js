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

router.get("/contact", (req, res) => {
  res.render("contact");
});


router.use((req, res) => {
  res.status(404).render("error");
});

export default router;