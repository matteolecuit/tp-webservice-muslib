package fr.ynov.webservice.restTP.controller;

import fr.ynov.webservice.restTP.model.Album;
import fr.ynov.webservice.restTP.service.AlbumService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping(value = "album")
public class AlbumController {

    @Autowired
    AlbumService albumService;

    @RequestMapping(method = RequestMethod.GET, value = "/random")
    public List<Album> getRandom(@RequestParam int numRand){
        return this.albumService.getRandom(numRand);
    }

    @RequestMapping(method = RequestMethod.POST, value = "")
    public Album getRandom(@RequestBody Album album){
        return this.albumService.save(album);
    }

    @RequestMapping(method = RequestMethod.GET, value = "")
    public Album getRandom(@RequestParam long id){
        Optional<Album> albumOpt = this.albumService.findById(id);
        return albumOpt.orElse(null);
    }
}
