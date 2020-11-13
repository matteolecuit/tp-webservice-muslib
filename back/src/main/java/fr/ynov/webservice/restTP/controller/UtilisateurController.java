package fr.ynov.webservice.restTP.controller;

import com.github.lambdaexpression.annotation.RequestBodyParam;
import fr.ynov.webservice.restTP.model.Utilisateur;
import fr.ynov.webservice.restTP.service.UtilisateurService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(value = "utilisateur")
public class UtilisateurController {

    @Autowired
    UtilisateurService utilisateurService;

    @RequestMapping(method = RequestMethod.GET, value = "/{id}")
    public String getUtilisateur(){
        return "hello world !";
    }

    @RequestMapping(method = RequestMethod.POST, value = "")
    public Utilisateur addUtilisateur(@RequestBodyParam String email, @RequestBodyParam String pseudo){
        Utilisateur user = new Utilisateur(email, pseudo);
        return utilisateurService.add(user);
    }
}
