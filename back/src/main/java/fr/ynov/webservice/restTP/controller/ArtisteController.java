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
    public Artiste createArtiste(@RequestParam("adminId") long adminId, @RequestBody Artiste artiste){
        return this.artisteService.create(adminId, artiste);
    }

    @RequestMapping(method = RequestMethod.PUT, value = "/{id}")
    public Artiste updateArtiste(@RequestParam("adminId") long adminId, @PathVariable("id") long artisteId, @RequestBody Artiste artiste){
        return this.artisteService.update(adminId, artisteId, artiste);
    }

    @RequestMapping(method = RequestMethod.DELETE, value = "")
    public Artiste deleteArtiste(@RequestParam("adminId") long adminId, @RequestParam long artisteId){
        return this.artisteService.delete(adminId, artisteId);
    }

    @RequestMapping(method = RequestMethod.GET, value = "/random")
    public List<Artiste> getRandom(@RequestParam int numRand){
        return this.artisteService.getRandom(numRand);
    }
}
