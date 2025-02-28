import dataMapper from "../data-mapper.js";


const adminController = {

  renderAdminPage(req, res) {
    try {
        
      res.render("admin");

    } catch (error) {
      console.log(error);
      res.status(500).send("Une erreur s'est produite."); 
    }
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

      await dataMapper.addProduct(name, description, origin, price_per_kilo, characteristic, available, reference);
      
      res.redirect("/admin/add");

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
  }
};

export default adminController;