package fr.ynov.webservice.restTP.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(value = "utilisateur")
public class UtilisateurController {

    @RequestMapping(method = RequestMethod.GET, value = "")
    public String getUtilisateur(){
        return "hello world !";
    }
}
