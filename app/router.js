import { Router } from 'express';
import catalogController from './controlllers/catalogController.js';
import homeController from './controlllers/homeController.js';
import adminController from './controlllers/adminController.js';


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

router.get("/admin/add", adminController.renderAdminPage);
router.post("/admin/add", adminController.handleproductForm);

router.get("/admin/remove", adminController.renderAdminSupressionPage);
router.post("/admin/remove/", adminController.handleRemoveForm);


router.use((req, res) => {
  res.status(404).render("error");
});

export default router;