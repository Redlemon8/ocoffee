import dataMapper from "../data-mapper.js";
import argon2 from "argon2";
import PasswordValidator from "password-validator";

const authController = {

  renderRegisterPage(req, res) {
    try {
        
      res.render("register");

    } catch (error) {
      console.log(error);
      res.status(500).send("Une erreur s'est produite."); 
    }
  },

  async registerUser(req, res) {
    // Récupérer les données du body dans une/plusieurs variables (Condition : vérifier la présence du body parser en amont du controlleur)
    // firstname, lastname, email, password, confirm
    const { user_name, email, password, confirm } = req.body;
    // console.log({ firstname, lastname, email, password, confirm });

    // Vérifier que tous les champs sont présents
    if (!user_name || !email || !password || !confirm) {
      // --> sinon : 400 (Bad Request)
      res.status(400).render("register", { errorMessage: "Tous les champs sont obligatoires." });
      return;
    }

    // Vérifier que le format des champs est le bon (CF - S12 - Body validation)
    // --> sinon : 400 (Bad Request)

    // Vérifier que le mot de passe et sa confirmation matchent !
    // --> sinon : 400 (Bad Request)
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

    await dataMapper.addUser(user_name, email, hash);
    

    // Rediriger vers /login
    res.render("admin-add", { successMessage: "Veuillez à présent vous authentifier." });

    // Autre option pour le redirect avec un message de succès
    // res.redirect("/login?successMessage=Veuillez à présent vous authentifier.");
  },

  renderLoginPage(req, res) {
    try {
        
      res.render("login");

    } catch (error) {
      console.log(error);
      res.status(500).send("Une erreur s'est produite."); 
    }
  },

  // LOG A USER 

  async loginUser(req, res) {

    try {

      // Récupérer l'email et le mot de passe fourni depuis req.body
      const { email, password } = req.body;

      // Valider la présence des champs -> sinon 400
      if (! email || ! password) {
        return res.status(400).render("login", { errorMessage: "Tous les champs sont obligatoires." });
      }

      const userEmail = req.body.email;  
      const user = await dataMapper.getOneUser(userEmail);

      if (!user) {
        return res.status(400).render("login", { errorMessage: "L'email et le mot de passe fournis ne correspondent pas." });
      }

      // mot de passe en clair : req.body.password
      const rawPassword = password;

      // mot de passe haché stocké : user.password
      const hashedPassword = user.password;

      // on compare les deux à l'aide de la fonction argon2.verify() --> true/false
      const isMatching = await argon2.verify(hashedPassword, rawPassword);
      
      // Si les mots de passe ne match pas --> 400 : message d'erreur (rester vague) + RETURN
      if (! isMatching) {
        return res.status(400).render("login", { errorMessage: "L'email et le mot de passe fournis ne correspondent pas." });
      }

      req.session.userId = user.id;

      res.redirect("/admin/add");
      

    } catch (error) {
      console.log(error);
      res.status(500).send(error.message); 
    }
  },
};

export default authController;
