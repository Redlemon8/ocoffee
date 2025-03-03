import dataMapper from "../data-mapper.js";

const catalogController = {

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