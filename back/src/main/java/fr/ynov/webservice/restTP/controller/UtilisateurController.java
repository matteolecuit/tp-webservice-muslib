package fr.ynov.webservice.restTP.controller;

import fr.ynov.webservice.restTP.entity.Album;
import fr.ynov.webservice.restTP.entity.Artiste;
import fr.ynov.webservice.restTP.entity.Titre;
import fr.ynov.webservice.restTP.entity.Utilisateur;
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

    @RequestMapping(method = RequestMethod.POST, value = "")
    public Utilisateur create(@RequestBody Utilisateur utilisateur){
        return utilisateurService.save(utilisateur);
    }

    @RequestMapping(method = RequestMethod.POST, value = "/{id}/favoris/album")
    public Utilisateur addAlbum(@PathVariable(value = "id") long userId, @RequestBody Album album){
        return this.utilisateurService.addAlbumToPlaylist(userId, album);
    }

    @RequestMapping(method = RequestMethod.POST, value = "/{id}/favoris/artiste")
    public Utilisateur addArtiste(@PathVariable(value = "id") long userId, @RequestBody Artiste artiste){
        return this.utilisateurService.addArtisteToPlaylist(userId, artiste);
    }

    @RequestMapping(method = RequestMethod.POST, value = "/{id}/favoris/titre")
    public Utilisateur addTitre(@PathVariable(value = "id") long userId, @RequestBody Titre titre){
        return this.utilisateurService.addTitreToPlaylist(userId, titre);
    }

    @RequestMapping(method = RequestMethod.GET, value = "/{id}/favoris")
    public Favoris addTitre(@PathVariable(value = "id") long userId){
        Optional<Utilisateur> userOpt = this.utilisateurService.findById(userId);
        if (userOpt.isPresent()){
            Utilisateur user = userOpt.get();
            return new Favoris(user.getTitres(), user.getArtistes(), user.getAlbums());
        }
        return null;
    }
}
