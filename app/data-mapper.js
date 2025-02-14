import client from "./database-client.js";

const dataMapper = {

  async getAllProducts() {
    const result = await client.query(`SELECT * FROM "product"`);
    const products = result.rows;
    return products;
  },

  async getCharacteristicsProducts() {
    const result = await client.query(`SELECT DISTINCT "characteristic" FROM "product"`);
    const characteristicsProducts = result.rows;
    return characteristicsProducts;
  },

  async getThreeAvailableRandomProducts() {
    const result = await client.query(`SELECT * FROM "product" WHERE available = 'Oui' ORDER BY RANDOM() LIMIT 3`);
    const threeAvailableProducts = result.rows;
    return threeAvailableProducts;
  },

  async getOneProduct(productId) {
    const result = await client.query(`SELECT * FROM "product" WHERE "id" = $1`, [productId]);
    const product = result.rows[0];
    return product;
  }
};

export default dataMapper;