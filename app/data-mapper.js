import client from "./database-client.js";

const dataMapper = {
  async getAllProducts() {
    const result = await client.query(`SELECT * FROM "product"`);
    const products = result.rows;
    return products;
  }
};

export default dataMapper;