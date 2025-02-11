import client from "./database-client.js";

const dataMapper = {

  async getAllProducts() {
    const result = await client.query(`SELECT * FROM "product"`);
    const products = result.rows;
    return products;
  },

  async getThreeRandomProducts() {
    const result = await client.query(`SELECT * FROM "product" ORDER BY RANDOM() LIMIT 3`);
    const threeProductList = result.rows;
    return threeProductList;
  }

};

export default dataMapper;