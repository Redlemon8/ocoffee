import dataMapper from "../data-mapper.js";

const adminController = {

  renderAdminPage(req, res) {

    res.render("admin");
  },

    
  async renderAdminAddingPage(req, res) {
    try {

      res.render("admin-add");

    } catch (error) {
      console.log(error);
      res.status(500).send("Une erreur s'est produite."); 
    }
  },

  async handleproductForm(req, res) {
    try {
  
      
      const { name, description, origin, price_per_kilo, characteristic, available, reference } = req.body;
      Number(price_per_kilo);
      
      if (!name || !description || !origin || !price_per_kilo || !characteristic || !available || !reference) {
        // --> sinon : 400 (Bad Request)
        res.status(400).render("admin-add", { errorMessage: "Tous les champs sont obligatoires." });
        return;
      }

      await dataMapper.addProduct(name, description, origin, price_per_kilo, characteristic, available, reference);
      
      res.render("admin-add", { successMessage: "Produit ajouté avec succés" });

    } catch (error) {
      console.log(error);
      res.status(500).send("Une erreur s'est produite."); 
    }
  },

  async renderAdminSupressionPage(req, res) {
    try {
        
      const allProducts = await dataMapper.getAllProducts();

      res.render("admin-remove", { allProducts });

    } catch (error) {
      console.log(error);
      res.status(500).send("Une erreur s'est produite."); 
    }
  },

  async handleRemoveForm(req, res) {
    try {
        
      const productId = Number(req.body.id);
      console.log(productId);


      await dataMapper.removeProduct(productId);

      res.redirect("/admin/remove");
      

    } catch (error) {
      console.log(error);
      res.status(500).send(error.message); 
    }
  },

  async renderAdminUpdatePage(req, res) {
    try {
        
      const allProducts = await dataMapper.getAllProducts();

      res.render("admin-update", { allProducts });

    } catch (error) {
      console.log(error);
      res.status(500).send("Une erreur s'est produite."); 
    }
  },

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
      res.status(500).send("Une erreur s'est produite."); 
    }
  },

  async handleUpdateProduct(req, res) {
    try {

      console.log('je suis dans le controller handleUpdateProduct');
      console.log('req.params.id:', req.params.id);
      console.log('req.body:', req.body);
      const { id, name, description, origin, price_per_kilo, characteristic, available, reference } = req.body;
      console.log(id);
      if (!id || isNaN(Number(id))) {
        console.log(id);
        return res.status(400).send("ID de produit invalide.");
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
  
      res.redirect("/admin/update");
  
    } catch (error) {
      console.error(error);
      res.status(500).send("Erreur lors de la mise à jour du produit.");
    }
  }
};

export default adminController;