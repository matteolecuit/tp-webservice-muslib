package fr.ynov.webservice.restTP.controller;

import fr.ynov.webservice.restTP.entity.*;
import fr.ynov.webservice.restTP.model.Favoris;
import fr.ynov.webservice.restTP.service.UtilisateurService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping(value = "utilisateur")
public class UtilisateurController {

    @Autowired
    UtilisateurService utilisateurService;

    @RequestMapping(method = RequestMethod.GET, value = "")
    public List<Utilisateur> getAll(){
        return this.utilisateurService.findAll();
    }

    @RequestMapping(method = RequestMethod.GET, value = "/{id}")
    public Utilisateur getUtilisateur(@PathVariable(value = "id") long id){
        Optional<Utilisateur> userOpt = this.utilisateurService.findById(id);
        return userOpt.orElse(null);
    }

    @RequestMapping(method = RequestMethod.POST, value = "/register")
    public Utilisateur createUtilisateur(@RequestBody Utilisateur utilisateur){
        return utilisateurService.save(utilisateur);
    }

    @RequestMapping(method = RequestMethod.POST, value = "/{id}/favoris/album")
    public Utilisateur addAlbumToFavorite(@PathVariable(value = "id") long userId, @RequestParam long albumId){
        return this.utilisateurService.addAlbumToFavorite(userId, albumId);
    }

    @RequestMapping(method = RequestMethod.DELETE, value = "/{id}/favoris/album")
    public Utilisateur deleteAlbumFromFavorite(@PathVariable(value = "id") long userId, @RequestParam long albumId){
        return this.utilisateurService.deleteAlbumFromFavorite(userId, albumId);
    }

    @RequestMapping(method = RequestMethod.POST, value = "/{id}/favoris/artiste")
    public Utilisateur addArtisteToFavorite(@PathVariable(value = "id") long userId, @RequestParam long artisteId){
        return this.utilisateurService.addArtisteToFavorite(userId, artisteId);
    }

    @RequestMapping(method = RequestMethod.DELETE, value = "/{id}/favoris/artiste")
    public Utilisateur deleteArtisteFromFavorite(@PathVariable(value = "id") long userId, @RequestParam long artisteId){
        return this.utilisateurService.deleteArtisteFromFavorite(userId, artisteId);
    }

    @RequestMapping(method = RequestMethod.POST, value = "/{id}/favoris/titre")
    public Utilisateur addTitreToFavorite(@PathVariable(value = "id") long userId, @RequestParam long titreId){
        return this.utilisateurService.addTitreToFavorite(userId, titreId);
    }

    @RequestMapping(method = RequestMethod.DELETE, value = "/{id}/favoris/titre")
    public Utilisateur deleteTitreFromFavorite(@PathVariable(value = "id") long userId, @RequestParam long titreId){
        return this.utilisateurService.deleteTitreFromFavorite(userId, titreId);
    }

    @RequestMapping(method = RequestMethod.GET, value = "/{id}/favoris")
    public Favoris getFavoris(@PathVariable(value = "id") long userId){
        return this.utilisateurService.getFavoris(userId);
    }

    @RequestMapping(method = RequestMethod.POST, value = "/{userId}/playlist")
    public Utilisateur createPlaylist(@PathVariable("userId") long userId, @RequestBody Playlist playlist){
        return this.utilisateurService.createPlaylist(userId, playlist);
    }

    @RequestMapping(method = RequestMethod.POST, value = "/{userId}/playlist/{playId}")
    public Utilisateur addTitreToPlaylist(@PathVariable(value = "userId") long userId, @PathVariable(value = "playId") long playId, @RequestParam long titreId){
        return this.utilisateurService.addTitreToPlaylist(userId, playId, titreId);
    }

    @RequestMapping(method = RequestMethod.DELETE, value = "/{userId}/playlist/{playId}")
    public Utilisateur deleteTitreFromPlaylist(@PathVariable(value = "userId") long userId, @PathVariable(value = "playId") long playId, @RequestParam long titreId){
        return this.utilisateurService.deleteTitreFromPlaylist(userId, playId, titreId);
    }

    @RequestMapping(method = RequestMethod.DELETE, value = "/{userId}/playlist")
    public Utilisateur deletePlaylist(@PathVariable(value = "userId") long userId, @RequestParam long playId){
        return this.utilisateurService.deletePlaylist(userId, playId);
    }

    @RequestMapping(method = RequestMethod.GET, value = "/{userId}/playlist/{playId}")
    public Playlist getPlaylist(@PathVariable(value = "userId") long userId, @PathVariable(value = "playId") long playId){
        return this.utilisateurService.getPlaylist(userId, playId);
    }

    @RequestMapping(method = RequestMethod.GET, value = "/{userId}/playlist")
    public List<Playlist> getAllPlaylist(@PathVariable(value = "userId") long userId){
        return this.utilisateurService.getAllPlaylist(userId);
    }
}
