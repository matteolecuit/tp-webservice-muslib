package fr.ynov.webservice.restTP.controller;

import fr.ynov.webservice.restTP.model.Playlist;
import fr.ynov.webservice.restTP.service.PlaylistService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.Optional;

@RestController
@RequestMapping(value = "playlist")
public class PlaylistController {

    @Autowired
    PlaylistService playlistService;

    @RequestMapping(method = RequestMethod.GET, value = "/{id}")
    public Playlist getRandom(@PathVariable("id") long id){
        Optional<Playlist> artistOpt = this.playlistService.findById(id);
        return artistOpt.orElse(null);
    }
}
