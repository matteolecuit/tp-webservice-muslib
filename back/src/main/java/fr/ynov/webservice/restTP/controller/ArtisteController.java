package fr.ynov.webservice.restTP.controller;

import fr.ynov.webservice.restTP.entity.Artiste;
import fr.ynov.webservice.restTP.service.ArtisteService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping(value = "artiste")
public class ArtisteController {

    @Autowired
    ArtisteService artisteService;

    @RequestMapping(method = RequestMethod.GET, value = "")
    public List<Artiste> getAll(){
        return this.artisteService.findAll();
    }

    @RequestMapping(method = RequestMethod.GET, value = "/{id}")
    public Artiste getById(@PathVariable("id") long id){
        Optional<Artiste> artistOpt = this.artisteService.findById(id);
        return artistOpt.orElse(null);
    }

    @RequestMapping(method = RequestMethod.POST, value = "")
    public Artiste create(@RequestParam("adminId") long adminId, @RequestBody Artiste artiste){
        return this.artisteService.create(adminId, artiste);
    }

    @RequestMapping(method = RequestMethod.GET, value = "/random")
    public List<Artiste> getRandom(@RequestParam int numRand){
        return this.artisteService.getRandom(numRand);
    }
}
