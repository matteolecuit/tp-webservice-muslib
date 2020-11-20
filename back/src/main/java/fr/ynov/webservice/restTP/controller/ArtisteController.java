package fr.ynov.webservice.restTP.controller;

import fr.ynov.webservice.restTP.entity.Artiste;
import fr.ynov.webservice.restTP.service.ArtisteService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;

import java.util.List;

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
    public Artiste getById(Authentication authentication, @PathVariable("id") long id){
        String email = "";
        if (authentication != null){
            email = authentication.getName();
        }
        return this.artisteService.findByIdAndIsLiked(email, id);
    }

    @RequestMapping(method = RequestMethod.POST, value = "")
    public Artiste createArtiste(Authentication authentication, @RequestBody Artiste artiste){
        return this.artisteService.create(authentication.getName(), artiste);
    }

    @RequestMapping(method = RequestMethod.PUT, value = "/{id}")
    public Artiste updateArtiste(Authentication authentication, @PathVariable("id") long artisteId, @RequestBody Artiste artiste){
        return this.artisteService.update(authentication.getName(), artisteId, artiste);
    }

    @RequestMapping(method = RequestMethod.DELETE, value = "")
    public Artiste deleteArtiste(Authentication authentication, @RequestParam long artisteId){
        return this.artisteService.delete(authentication.getName(), artisteId);
    }

    @RequestMapping(method = RequestMethod.GET, value = "/random")
    public List<Artiste> getRandom(@RequestParam int numRand){
        return this.artisteService.getRandom(numRand);
    }
}
