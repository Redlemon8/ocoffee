import { Router } from 'express';
import catalogController from './controlllers/catalogController.js';

const router = Router();

router.get("/", (req, res) => {
  res.render("index");
});

router.get("/catalogue", catalogController.catalogPage);
router.get("/catalogue/all", catalogController.catalogList);

router.get("/produit", (req, res) => {
  res.render("produit");
});

export default router;