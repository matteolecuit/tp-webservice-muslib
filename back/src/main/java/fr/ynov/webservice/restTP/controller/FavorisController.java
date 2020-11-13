package fr.ynov.webservice.restTP.controller;

import com.github.lambdaexpression.annotation.RequestBodyParam;
import fr.ynov.webservice.restTP.model.Favoris;
import fr.ynov.webservice.restTP.service.FavorisService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.Optional;

@RestController
@RequestMapping(value = "favoris")
public class FavorisController {

    @Autowired
    FavorisService favorisService;

    @RequestMapping(method = RequestMethod.GET, value = "/{id}")
    public Favoris getRandom(@PathVariable("id") long id){
        Optional<Favoris> favorisOpt = this.favorisService.findById(id);
        return favorisOpt.orElse(null);
    }

    /*@RequestMapping(method = RequestMethod.POST, value = "/album")
    public Favoris addAlbum(@RequestBodyParam("id") long id){
        Optional<Favoris> favorisOpt = this.favorisService.findById(id);
        return favorisOpt.orElse(null);
    }

    @RequestMapping(method = RequestMethod.POST, value = "/artiste")
    public Favoris addArtiste(@RequestBodyParam("id") long id){
        Optional<Favoris> favorisOpt = this.favorisService.findById(id);
        return favorisOpt.orElse(null);
    }

    @RequestMapping(method = RequestMethod.POST, value = "/titre")
    public Favoris addTitre(@RequestBodyParam("id") long id){
        Optional<Favoris> favorisOpt = this.favorisService.findById(id);
        return favorisOpt.orElse(null);
    }*/
}
