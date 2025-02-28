import { Router } from 'express';
import catalogController from './controllers/catalogController.js';
import homeController from './controllers/homeController.js';
import adminController from './controllers/adminController.js';
import authController from './controllers/authController.js';


const router = Router();


router.get("/", homeController.homePage);
router.get("/produit/:id", homeController.renderOneProduct);

router.get("/catalog", catalogController.catalogPage);
router.get("/catalog/all", catalogController.catalogList);


router.get("/boutique", (req, res) => {
  res.render("about");
});

router.get("/contact", (req, res) => {
  res.render("contact");
});

router.get("/register", authController.renderRegisterPage);
router.post("/register", authController.registerUser);

router.get("/login", authController.renderLoginPage);
router.post("/login", authController.loginUser);

router.get("/admin/add", adminController.renderAdminAddingPage);
router.post("/admin/add", adminController.handleproductForm);

router.post("/upload", (req, res) => {

  const { image } = req.files;

  if (!image) return res.sendStatus(400);

  image.mv("public/images/coffees/" + image.name);

  res.redirect("/admin/add");
});

router.get("/admin/remove", adminController.renderAdminSupressionPage);
router.post("/admin/remove/", adminController.handleRemoveForm);


router.use((req, res) => {
  res.status(404).render("error");
});

export default router;