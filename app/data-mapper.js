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
  },

  async addProduct(name, description, origin, price_per_kilo, characteristic, available, reference) {
    const result = await client.query(`SELECT MAX("id") FROM "product"`);
    const id = result.rows[0].max + 1;

    await client.query(`
      INSERT INTO "product" ("id", "name", "description", "origin", "price_per_kilo", "characteristic", "available", "reference")
      VALUES ($1, $2, $3, $4, $5, $6, $7, $8)
      `, [id, name, description, origin, Number(price_per_kilo), characteristic, available, reference]);
    
    return id;
  },

  async removeProduct(productId) {

    await client.query(`
      DELETE FROM "product" WHERE "id" = $1`, [productId]);
  },

  async getOneUser(userEmail) {
    const result = await client.query(`SELECT * FROM "user" WHERE "email" = $1`, [userEmail]);
    const user = result.rows[0];
    return user;
  },

  async addUser(user_name, email, password, role = "visitor") {
    const result = await client.query(`SELECT MAX("id") FROM "user"`);
    const id = result.rows[0].max + 1;

    await client.query(`
      INSERT INTO "user" ("id", "user_name", "email", "password", "role")
      VALUES ($1, $2, $3, $4, $5)
      `, [id, user_name, email, password, role]);
    
    return id;
  },
};

export default dataMapper;