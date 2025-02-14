import dataMapper from "../data-mapper.js";


const adminController = {
  async renderAdminPage(req, res) {
    try {
        
      res.render("admin");

    } catch (error) {
      console.log(error);
      res.status(500).send("Une erreur s'est produite."); 
    }
  },

  async handleproductForm(req, res) {
    try {
        
      const { name, description, origin, price_per_kilo, characteristic, available, reference } = req.body;
      Number(price_per_kilo);
      console.log(req.body);
      console.log(typeof Number(price_per_kilo));

      await dataMapper.addProduct(name, description, origin, price_per_kilo, characteristic, available, reference);
      
      res.redirect("/admin/add");

    } catch (error) {
      console.log(error);
      res.status(500).send("Une erreur s'est produite."); 
    }
  }
};

export default adminController;