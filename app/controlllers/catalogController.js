import dataMapper from "../data-mapper.js";

const catalogController = {
    
  async catalogPage(req, res) {
    try {

      const products = await dataMapper.getAllProducts();

      res.render("catalogue", {products});

    } catch (error) {
      console.log(error);
      res.status(500).send("Une erreur s'est produite.");
    }
  },

  async catalogList(req, res) {
    try {

      const allProducts = await dataMapper.getAllProducts();

      res.render("catalogList", { allProducts });

    } catch (error) {
      console.log(error);
      res.status(500).send("Une erreur s'est produite.");
    }
  }
};

export default catalogController;