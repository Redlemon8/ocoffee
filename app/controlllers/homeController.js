import dataMapper from "../data-mapper.js";

const homeController = {

  async homePage(req, res) {

    try {

      const threeAvailableProducts = await dataMapper.getThreeAvailableRandomProducts();
    
      res.render("index", { threeAvailableProducts });

    } catch (error) {
      console.log(error);
      res.status(500).send("Une erreur s'est produite.");
    }
  }
};

export default homeController;