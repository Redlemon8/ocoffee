import dataMapper from "../data-mapper.js";

const catalogController = {

  // Display the characteristic product to the category selector
  // And give all products list when the show all button is clicked
  async catalogPage(req, res) {
    try {

      const characteristics = await dataMapper.getCharacteristicsProducts();
      const products = await dataMapper.getAllProducts();

      res.render("catalog", { products, characteristics, });
    } catch (error) {
      console.error(error);
      res.status(500).render("500");
    }
  },
};

export default catalogController;