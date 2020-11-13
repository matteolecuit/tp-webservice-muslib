package fr.ynov.webservice.restTP.controller;

import fr.ynov.webservice.restTP.model.Titre;
import fr.ynov.webservice.restTP.service.TitreService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.Optional;

@RestController
@RequestMapping(value = "titre")
public class TitreController {

    @Autowired
    TitreService titreService;

    @RequestMapping(method = RequestMethod.GET, value = "/{id}")
    public Titre getRandom(@PathVariable("id") long id){
        Optional<Titre> titreOpt = this.titreService.findById(id);
        return titreOpt.orElse(null);
    }
}
