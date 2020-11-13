package fr.ynov.webservice.restTP.controller;

import fr.ynov.webservice.restTP.model.Album;
import fr.ynov.webservice.restTP.model.Artiste;
import fr.ynov.webservice.restTP.model.Titre;
import fr.ynov.webservice.restTP.model.Utilisateur;
import fr.ynov.webservice.restTP.service.AlbumService;
import fr.ynov.webservice.restTP.service.ArtisteService;
import fr.ynov.webservice.restTP.service.TitreService;
import fr.ynov.webservice.restTP.service.UtilisateurService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@RequestMapping(value = "utilisateur")
public class UtilisateurController {

    @Autowired
    UtilisateurService utilisateurService;

    @RequestMapping(method = RequestMethod.GET, value = "/{id}")
    public Utilisateur getUtilisateur(@RequestParam(value = "id") long id){
        Optional<Utilisateur> userOpt = this.utilisateurService.findById(id);
        return userOpt.orElse(null);
    }

    @RequestMapping(method = RequestMethod.POST, value = "")
    public Utilisateur addUtilisateur(@RequestBody Utilisateur utilisateur){
        return utilisateurService.save(utilisateur);
    }

    @RequestMapping(method = RequestMethod.POST, value = "/favoris/album")
    public Utilisateur addAlbum(@RequestParam(value = "userId") long userId, @RequestBody Album album){
        return this.utilisateurService.addAlbumToPlaylist(userId, album);
    }

    @RequestMapping(method = RequestMethod.POST, value = "/favoris/artiste")
    public Utilisateur addArtiste(@RequestParam(value = "userId") long userId, @RequestBody Artiste artiste){
        return this.utilisateurService.addArtisteToPlaylist(userId, artiste);
    }

    @RequestMapping(method = RequestMethod.POST, value = "/favoris/titre")
    public Utilisateur addTitre(@RequestParam(value = "userId") long userId, @RequestBody Titre titre){
        return this.utilisateurService.addTitreToPlaylist(userId, titre);
    }
}
