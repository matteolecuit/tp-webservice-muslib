package fr.ynov.webservice.restTP.controller;

import fr.ynov.webservice.restTP.model.Playlist;
import fr.ynov.webservice.restTP.model.Utilisateur;
import fr.ynov.webservice.restTP.service.PlaylistService;
import fr.ynov.webservice.restTP.service.UtilisateurService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@RequestMapping(value = "playlist")
public class PlaylistController {

    @Autowired
    PlaylistService playlistService;

    @Autowired
    UtilisateurService utilisateurService;

    @RequestMapping(method = RequestMethod.GET, value = "/{id}")
    public Playlist getRandom(@PathVariable("id") long id){
        Optional<Playlist> artistOpt = this.playlistService.findById(id);
        return artistOpt.orElse(null);
    }

    @RequestMapping(method = RequestMethod.POST, value = "")
    public Playlist create(@RequestParam("userId") long userId, @RequestBody Playlist playlist){
        Optional<Utilisateur> userOpt = this.utilisateurService.findById(userId);
        if (userOpt.isPresent()){
            playlist.setUtilisateur(userOpt.get());
            return playlistService.save(playlist);
        }
        return null;
    }
}
