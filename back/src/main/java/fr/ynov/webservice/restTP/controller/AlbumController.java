package fr.ynov.webservice.restTP.controller;

import fr.ynov.webservice.restTP.entity.Album;
import fr.ynov.webservice.restTP.service.AlbumService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping(value = "album")
public class AlbumController {

    @Autowired
    AlbumService albumService;

    @RequestMapping(method = RequestMethod.GET, value = "")
    public List<Album> getAll(){
        return this.albumService.findAll();
    }

    @RequestMapping(method = RequestMethod.GET, value = "/{id}")
    public Album getById(Authentication authentication, @PathVariable(value = "id") long id){
        String email = "";
        if (authentication != null){
            email = authentication.getName();
        }
        return this.albumService.findByIdAndIsLiked(email, id);
    }

    @RequestMapping(method = RequestMethod.POST, value = "")
    public Album create(Authentication authentication, @RequestBody Album album){
        return this.albumService.create(authentication.getName(), album);
    }

    @RequestMapping(method = RequestMethod.PUT, value = "/{id}")
    public Album updateAlbum(Authentication authentication, @PathVariable("id") long albumId, @RequestBody Album album){
        return this.albumService.update(authentication.getName(), albumId, album);
    }

    @RequestMapping(method = RequestMethod.DELETE, value = "")
    public Album deleteAlbum(Authentication authentication, @RequestParam long albumId){
        return this.albumService.delete(authentication.getName(), albumId);
    }

    @RequestMapping(method = RequestMethod.GET, value = "/random")
    public List<Album> getRandom(@RequestParam int numRand){
        return this.albumService.getRandom(numRand);
    }
}
