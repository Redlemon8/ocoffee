import dataMapper from "../data-mapper.js";

const catalogController = {
    
  async catalogPage(req, res) {
    try {

      const threeProductList = await dataMapper.getThreeAvailableRandomProducts();
      const characteristicsProducts = await dataMapper.getCharacteristicsProducts();

      res.render("catalogue", { threeProductList, characteristicsProducts });

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

    /** 
      * TODO render only the available items like the home page
    */
  }
};

export default catalogController;