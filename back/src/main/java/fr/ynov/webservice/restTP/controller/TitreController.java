package fr.ynov.webservice.restTP.controller;

import fr.ynov.webservice.restTP.model.Administrateur;
import fr.ynov.webservice.restTP.model.Titre;
import fr.ynov.webservice.restTP.service.AdministrateurService;
import fr.ynov.webservice.restTP.service.TitreService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

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

    @RequestMapping(method = RequestMethod.POST, value = "")
    public Titre create(@RequestParam("userId") long userId, @RequestBody Titre titre){
        return this.titreService.create(userId, titre);
    }
}
