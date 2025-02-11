import { Router } from 'express';

const router = Router();

router.get("/", (req, res) => {
  res.render("index");
});

router.get("/catalogue", (req, res) => {
  res.render("catalogue");
});

router.get("/produit", (req, res) => {
  res.render("produit");
});

export default router;