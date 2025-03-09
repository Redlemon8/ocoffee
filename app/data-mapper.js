import client from "../config/database-client.js";

const dataMapper = {

  //PRODUCT QUERY TO THE DB

  // Query db to get the full list from product table
  async getAllProducts() {
    const result = await client.query(`SELECT * FROM "product"`);
    const products = result.rows;
    return products;
  },

  // Query db to get the product's characteristic
  async getCharacteristicsProducts() {
    const result = await client.query(`SELECT DISTINCT "characteristic" FROM "product"`);
    const characteristicsProducts = result.rows;
    return characteristicsProducts;
  },


  // Query db to get 3 available products used to the homeController
  async getThreeAvailableRandomProducts() {
    const result = await client.query(`SELECT * FROM "product" WHERE available = TRUE ORDER BY RANDOM() LIMIT 3`);
    const threeAvailableProducts = result.rows;
    return threeAvailableProducts;
  },

  // Query db to get 1 product used to the homeController to render the product sheet
  async getOneProduct(productId) {
    const result = await client.query(`SELECT * FROM "product" WHERE "id" = $1`, [productId]);
    const product = result.rows[0];
    return product;
  },

  // Query db to add a product from the admin-add page
  // POST Method
  async addProduct(name, description, origin, price_per_kilo, characteristic, available, reference) {
    const result = await client.query(`SELECT MAX("id") FROM "product"`);
    const id = result.rows[0].max + 1;

    await client.query(`
      INSERT INTO "product" ("id", "name", "description", "origin", "price_per_kilo", "characteristic", "available", "reference")
      VALUES ($1, $2, $3, $4, $5, $6, $7, $8)
      `, [id, name, description, origin, Number(price_per_kilo), characteristic, available, reference]);
    
    return id;
  },

  // Query to remove a product from admin-remove
  // POST Method
  async removeProduct(productId) {

    await client.query(`
      DELETE FROM "product" WHERE "id" = $1`, [productId]);
  },

  // Query db to update a product from admin-update
  // POST Method
  async updateProduct(id, updateFields) {
    const fields = Object.keys(updateFields).map((field, index) => `"${field}" = $${index + 2}`).join(", ");
    const values = Object.values(updateFields);
  
    await client.query(`
      UPDATE "product"
      SET ${fields}
      WHERE "id" = $1
    `, [id, ...values]);
  },

  // USER QUERY TO THE DB

  // Query db to get an email user, used to the register and login method
  async getOneUser(userEmail) {
    const result = await client.query(`SELECT * FROM "user" WHERE "email" = $1`, [userEmail]);
    const user = result.rows[0];
    return user;
  },

  // Query db to get a user's info by id without password
  // This method is used to load the locals 
  async getUserId(userId) {
    const result = await client.query(`SELECT "id", "user_name", "email", "role" 
      FROM "user" WHERE "id" = $1`, [userId]);
    const user = result.rows[0];
    return user;
  },

  // Register a new user into the db
  async addUser(user_name, email, password, role = "visiteur") {
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