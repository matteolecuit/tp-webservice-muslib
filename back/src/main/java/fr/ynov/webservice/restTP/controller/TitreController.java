package fr.ynov.webservice.restTP.controller;

import fr.ynov.webservice.restTP.entity.Titre;
import fr.ynov.webservice.restTP.service.TitreService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping(value = "titre")
public class TitreController {

    @Autowired
    TitreService titreService;

    @RequestMapping(method = RequestMethod.GET, value = "")
    public List<Titre> getAll(){
        return this.titreService.findAll();
    }

    @RequestMapping(method = RequestMethod.GET, value = "/{id}")
    public Titre getById(@PathVariable("id") long id){
        Optional<Titre> titreOpt = this.titreService.findById(id);
        return titreOpt.orElse(null);
    }

    @RequestMapping(method = RequestMethod.POST, value = "")
    public Titre create(@RequestParam("userId") long userId, @RequestBody Titre titre){
        return this.titreService.create(userId, titre);
    }
    @GetMapping(value="")
    public List<Titre> getAllTitres(){
    	return this.titreService.getAllTitres();
    }
}
