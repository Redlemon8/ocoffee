import dataMapper from "../data-mapper.js";
import argon2 from "argon2";
import PasswordValidator from "password-validator";

const authController = {

  // Display the register page
  renderRegisterPage(req, res) {
    try {
        
      res.render("register");

    } catch (error) {
      console.log(error);
      res.status(500).render("500"); 
    }
  },

  // Method to register a user.
  // Will check if the user already exist and check the password creation
  // Then render the login page
  async registerUser(req, res) {
    try {
      const { user_name, email, password, confirm, role } = req.body;
    
      if (!user_name || !email || !password || !confirm || !role) {
        // --> sinon : 400 (Bad Request)
        res.status(400).render("register", { errorMessage: "Tous les champs sont obligatoires." });
        return;
      }

      if (password !== confirm) {
        return res.status(400).render("register", { errorMessage: "Le mot de passe et sa confirmation ne correspondent pas." });
      }

      const schema = new PasswordValidator()
        .is().min(12)                           
        .is().max(100)                                 
        .has().uppercase()                             
        .has().lowercase()                              
        .has().digits(1)                              
        .has().symbols(1)
        .has().not().spaces();                          
      
      if (! schema.validate(password)) {
        return res.status(400).render("register", { errorMessage: "Le mot de passe n'est pas suffisamment complexe. Veuillez utiliser au moins 12 caractères, une majuscule, une minuscule, un chiffre et un symbole." });
      }

      const alreadyExistingUser = await dataMapper.getOneUser(email);

      if (alreadyExistingUser) {
        return res.status(409).render("register", { errorMessage: "L'email renseigné est déjà utilisé." });
      }

      const hash = await argon2.hash(password);

      await dataMapper.addUser(user_name, email, hash, role);
      
      res.render("login", { successMessage: "Veuillez à présent vous authentifier." });
    } catch (error) {
      console.log(error);
      res.status(500).render("500");
    }
  },


  // Display the login page
  renderLoginPage(req, res) {
    try {
        
      res.render("login");

    } catch (error) {
      console.log(error);
      res.status(500).render("500"); 
    }
  },

  
  // Method to log a user.
  // Will check if the user already exist and password/email is matching
  // Then render the admin page or error
  async loginUser(req, res) {
    try {

      const { email, password } = req.body;

      if (! email || ! password) {
        return res.status(400).render("login", { errorMessage: "Tous les champs sont obligatoires." });
      }

      const userEmail = req.body.email;  
      const user = await dataMapper.getOneUser(userEmail);

      if (!user) {
        return res.status(400).render("login", { errorMessage: "L'email et le mot de passe fournis ne correspondent pas." });
      }

     
      const rawPassword = password;

      const hashedPassword = user.password;

      const isMatching = await argon2.verify(hashedPassword, rawPassword);
      
      if (! isMatching) {
        return res.status(400).render("login", { errorMessage: "L'email et le mot de passe fournis ne correspondent pas." });
      }

      req.session.userId = user.id;

      res.redirect("/admin");
      

    } catch (error) {
      console.log(error);
      res.status(500).render("500");
    }
  },

  // Log out the user 
  async logoutUser(req, res) {
    req.session.destroy();

    res.redirect("/");
  }
};

export default authController;
