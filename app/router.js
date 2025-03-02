import { Router } from 'express';
import catalogController from './controllers/catalogController.js';
import homeController from './controllers/homeController.js';
import adminController from './controllers/adminController.js';
import authController from './controllers/authController.js';
import { isAuthed } from './middlewares/isAuthed.middleware.js';
import { isAdmin } from './middlewares/isAdmin.middleware.js';


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

router.get("/register", isAdmin, authController.renderRegisterPage);
router.post("/register", authController.registerUser);

router.get("/login", authController.renderLoginPage);
router.post("/login", authController.loginUser);
router.get("/logout", authController.logoutUser);

router.get("/admin", isAuthed, adminController.renderAdminPage);
router.get("/admin/remove", isAuthed, adminController.renderAdminSupressionPage);
router.post("/admin/remove/", isAuthed, adminController.handleRemoveForm);
router.get("/admin/add", isAuthed, adminController.renderAdminAddingPage);
router.post("/admin/add", isAuthed, adminController.handleproductForm);

router.post("/upload", (req, res) => {

  const { image } = req.files;

  if (!image) return res.sendStatus(400);

  image.mv("public/images/coffees/" + image.name);

  res.redirect("/admin/add");
});


router.use((req, res) => {
  res.status(404).render("error");
});

export default router;