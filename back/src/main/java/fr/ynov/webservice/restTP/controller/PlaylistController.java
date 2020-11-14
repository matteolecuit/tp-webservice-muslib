package fr.ynov.webservice.restTP.controller;

import fr.ynov.webservice.restTP.entity.Playlist;
import fr.ynov.webservice.restTP.service.PlaylistService;
import fr.ynov.webservice.restTP.service.UtilisateurService;
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

    @Autowired
    UtilisateurService utilisateurService;

    @RequestMapping(method = RequestMethod.GET, value = "/{id}")
    public Playlist getById(@PathVariable("id") long id){
        Optional<Playlist> playlistOpt = this.playlistService.findById(id);
        return playlistOpt.orElse(null);
    }
}
