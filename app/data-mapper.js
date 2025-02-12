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

  async getThreeRandomProducts() {
    const result = await client.query(`SELECT * FROM "product" ORDER BY RANDOM() LIMIT 3`);
    const threeProductList = result.rows;
    return threeProductList;
  },

  async getThreeAvailableRandomProducts() {
    const result = await client.query(`SELECT * FROM "product" WHERE available = 'Oui' ORDER BY RANDOM() LIMIT 3`);
    const threeAvailableProducts = result.rows;
    return threeAvailableProducts;
  }
};

export default dataMapper;