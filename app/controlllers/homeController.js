import dataMapper from "../data-mapper.js";

const homeController = {

  async homePage(req, res) {

    try {

      const productId = req.params.id;

      const threeAvailableProducts = await dataMapper.getThreeAvailableRandomProducts();
      const product = await dataMapper.getOneProduct(productId);
    
      res.render("index", { threeAvailableProducts, product });

    } catch (error) {
      console.log(error);
      res.status(500).send("Une erreur s'est produite.");
    }
  },

  async renderOneProduct(req, res) {

    try {

      const productId = req.params.id;

      const product = await dataMapper.getOneProduct(productId);

      if (! product) {
        res.status(404).render("404");
        return; 
      }
    
      res.render("product", { product });

    } catch (error) {
      console.log(error);
      res.status(500).send("Une erreur s'est produite.");
    }
  }
};

export default homeController;

