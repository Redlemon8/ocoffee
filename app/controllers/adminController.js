import dataMapper from "../data-mapper.js";

const adminController = {

  // Display the Admin Home Page
  renderAdminPage(req, res) {

    res.render("admin");
  },

  // Display Admin page to add product to the db
  async renderAdminAddingPage(req, res) {
    try {

      res.render("admin-add");

    } catch (error) {
      console.log(error);
      res.status(500).render("500"); 
    }
  },

  // Method to add a product to the db
  // Result will be used by addProduct's Method into the data-mapper 
  async handleproductForm(req, res) {
    try {
  
      
      const { name, description, origin, price_per_kilo, characteristic, available, reference } = req.body;
      Number(price_per_kilo);
      
      if (!name || !description || !origin || !price_per_kilo || !characteristic || !available || !reference) {
        
        res.status(400).render("admin-add", { errorMessage: "Tous les champs sont obligatoires." });
        return;
      }

      await dataMapper.addProduct(name, description, origin, price_per_kilo, characteristic, available, reference);
      
      res.render("admin-add", { successMessage: "Produit ajouté avec succés" });

    } catch (error) {
      console.log(error);
      res.status(500).render("500"); 
    }
  },

  // Display Admin page to remove product from the db
  async renderAdminSupressionPage(req, res) {
    try {
        
      const allProducts = await dataMapper.getAllProducts();

      res.render("admin-remove", { allProducts });

    } catch (error) {
      console.log(error);
      res.status(500).render("500");
    }
  },

  // Method to add product to the db
  // Result will be used by removeProduct's Method into the data-mapper
  async handleRemoveForm(req, res) {
    try {
        
      const productId = Number(req.body.id);

      await dataMapper.removeProduct(productId);

      if (!productId) {
        res.status(404).render({ errorMessage: "Le produit n'existe pas !"});
      }

      res.redirect("/admin/remove");
      

    } catch (error) {
      console.log(error);
      res.status(500).render("500"); 
    }
  },

  // Display Admin page to select the product to update
  async renderAdminUpdatePage(req, res) {
    try {
        
      const allProducts = await dataMapper.getAllProducts();

      res.render("admin-update", { allProducts });

    } catch (error) {
      console.log(error);
      res.status(500).render("500"); 
    }
  },

  // Display Product page to update
  async renderProductToUpdate(req, res) {
    try {
      const productId = req.params.id;
      const product = await dataMapper.getOneProduct(productId);

      if (! product) {
        res.status(404).render("404");
        return; 
      }

      res.render("product-to-update", { product });

    } catch (error) {
      console.log(error);
      res.status(500).render("500"); 
    }
  },

  // Method to update product to the db
  // Result will be used by updateProduct's Method into the data-mapper
  async handleUpdateProduct(req, res) {
    try {

      const { id, name, description, origin, price_per_kilo, characteristic, available, reference } = req.body;
      if (!id || isNaN(Number(id))) {
        return res.status(400).render("product-to-update", { errorMessage: "Le produit n'existe pas !" });
      }

  
      const updateFields = {};
      if (name) updateFields.name = name;
      if (description) updateFields.description = description;
      if (origin) updateFields.origin = origin;
      if (price_per_kilo) updateFields.price_per_kilo = Number(price_per_kilo);
      if (characteristic) updateFields.characteristic = characteristic;
      if (available !== undefined) updateFields.available = available;
      if (reference) updateFields.reference = reference;
  
      await dataMapper.updateProduct(id, updateFields);
  
      res.redirect(`/admin/update/${id}`);
  
    } catch (error) {
      console.error(error);
      res.status(500).render("500");
    }
  }
};

export default adminController;