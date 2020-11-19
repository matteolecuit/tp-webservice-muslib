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
    public Titre createTitre(@RequestParam("adminId") long adminId, @RequestBody Titre titre){
        return this.titreService.create(adminId, titre);
    }

    @RequestMapping(method = RequestMethod.PUT, value = "/{id}")
    public Titre updateTitre(@RequestParam("adminId") long adminId, @PathVariable("id") long titreId, @RequestBody Titre titre){
        return this.titreService.update(adminId, titreId, titre);
    }

    @RequestMapping(method = RequestMethod.DELETE, value = "")
    public Titre deleteTitre(@RequestParam("adminId") long adminId, @RequestParam long titreId){
        return this.titreService.delete(adminId, titreId);
    }

    @RequestMapping(method = RequestMethod.GET, value = "/random")
    public List<Titre> getRandom(@RequestParam int numRand){
        return this.titreService.getRandom(numRand);
    }
}
