package fr.ynov.webservice.restTP.controller;

import fr.ynov.webservice.restTP.entity.Album;
import fr.ynov.webservice.restTP.entity.Album;
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

    @RequestMapping(method = RequestMethod.GET, value = "")
    public List<Album> getAll(){
        return this.albumService.findAll();
    }

    @RequestMapping(method = RequestMethod.GET, value = "/{id}")
    public Album getById(@PathVariable(value = "id") long id){
        Optional<Album> albumOpt = this.albumService.findById(id);
        return albumOpt.orElse(null);
    }

    @RequestMapping(method = RequestMethod.POST, value = "")
    public Album create(@RequestParam("adminId") long adminId, @RequestBody Album album){
        return this.albumService.create(adminId, album);
    }

    @RequestMapping(method = RequestMethod.PUT, value = "/{id}")
    public Album updateAlbum(@RequestParam("adminId") long adminId, @PathVariable("id") long albumId, @RequestBody Album album){
        return this.albumService.update(adminId, albumId, album);
    }

    @RequestMapping(method = RequestMethod.DELETE, value = "")
    public Album deleteAlbum(@RequestParam("adminId") long adminId, @RequestParam long albumId){
        return this.albumService.delete(adminId, albumId);
    }

    @RequestMapping(method = RequestMethod.GET, value = "/random")
    public List<Album> getRandom(@RequestParam int numRand){
        return this.albumService.getRandom(numRand);
    }
}
