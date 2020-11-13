package fr.ynov.webservice.restTP.controller;

import fr.ynov.webservice.restTP.model.Artiste;
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

    @RequestMapping(method = RequestMethod.GET, value = "/random")
    public List<Artiste> getRandom(@RequestParam int numRand){
        return this.artisteService.getRandom(numRand);
    }

    @RequestMapping(method = RequestMethod.POST, value = "")
    public Artiste getRandom(@RequestBody Artiste artiste){
        return this.artisteService.save(artiste);
    }

    @RequestMapping(method = RequestMethod.GET, value = "/{id}")
    public Artiste getRandom(@PathVariable("id") long id){
        Optional<Artiste> artistOpt = this.artisteService.findById(id);
        return artistOpt.orElse(null);
    }
}
