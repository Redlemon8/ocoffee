import dataMapper from "../data-mapper.js";

const homeController = {

  // Display the home page with 3 available products
  async homePage(req, res) {

    try {

      const threeAvailableProducts = await dataMapper.getThreeAvailableRandomProducts();
    
      res.render("index", { threeAvailableProducts });

    } catch (error) {
      console.log(error);
      res.status(500).render("500");
    }
  },

  // Display the product page with the product ID selected from the home page
  async renderOneProduct(req, res) {

    try {

      const productId = req.params.id;

      const product = await dataMapper.getOneProduct(productId);

      if (! product) {
        res.status(404).render("404");
        return; 
      }
    
      res.render("product", { product, productId });

    } catch (error) {
      console.log(error);
      res.status(500).render("500");
    }
  }
};

export default homeController;

