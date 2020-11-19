package fr.ynov.webservice.restTP.controller;

import com.alibaba.fastjson.JSON;
import com.alibaba.fastjson.JSONArray;
import com.alibaba.fastjson.JSONObject;
import com.google.api.client.json.Json;
import fr.ynov.webservice.restTP.entity.Playlist;
import fr.ynov.webservice.restTP.entity.Utilisateur;
import fr.ynov.webservice.restTP.exception.PlaylistTitreExistException;
import fr.ynov.webservice.restTP.model.Favoris;
import fr.ynov.webservice.restTP.security.JWTAuthenticationFilter;
import fr.ynov.webservice.restTP.service.UtilisateurService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.web.authentication.WebAuthenticationDetails;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping(value = "utilisateur")
public class UtilisateurController {

    @Autowired
    UtilisateurService utilisateurService;

    @RequestMapping(method = RequestMethod.GET, value = "")
    public Utilisateur getUtilisateur(Authentication authentication){
        Optional<Utilisateur> userOpt = this.utilisateurService.findByEmail(authentication.getName());
        return userOpt.orElse(null);
    }

    @RequestMapping(method = RequestMethod.POST, value = "/register")
    public JSONObject createUtilisateur(@RequestBody Utilisateur utilisateur){
        Utilisateur user =  utilisateurService.save(utilisateur);
        UsernamePasswordAuthenticationToken authToken = new UsernamePasswordAuthenticationToken(user.getEmail(), user.getPassword());
        SecurityContextHolder.getContext().setAuthentication(authToken);
        String token = JWTAuthenticationFilter.generateToken(user.getEmail());
        System.out.println(token);
        JSONObject json = new JSONObject();
        json.put("token", token);
        json.put("user", user);
        return json;
    }

    @RequestMapping(method = RequestMethod.POST, value = "/favoris/album")
    public Utilisateur addAlbumToFavorite(Authentication authentication, @RequestParam long albumId){
        return this.utilisateurService.addAlbumToFavorite(authentication.getName(), albumId);
    }

    @RequestMapping(method = RequestMethod.DELETE, value = "/favoris/album")
    public Utilisateur deleteAlbumFromFavorite(Authentication authentication, @RequestParam long albumId){
        return this.utilisateurService.deleteAlbumFromFavorite(authentication.getName(), albumId);
    }

    @RequestMapping(method = RequestMethod.POST, value = "/favoris/artiste")
    public Utilisateur addArtisteToFavorite(Authentication authentication, @RequestParam long artisteId){
        return this.utilisateurService.addArtisteToFavorite(authentication.getName(), artisteId);
    }

    @RequestMapping(method = RequestMethod.DELETE, value = "/favoris/artiste")
    public Utilisateur deleteArtisteFromFavorite(Authentication authentication, @RequestParam long artisteId){
        return this.utilisateurService.deleteArtisteFromFavorite(authentication.getName(), artisteId);
    }

    @RequestMapping(method = RequestMethod.POST, value = "/favoris/titre")
    public Utilisateur addTitreToFavorite(Authentication authentication, @RequestParam long titreId){
        return this.utilisateurService.addTitreToFavorite(authentication.getName(), titreId);
    }

    @RequestMapping(method = RequestMethod.DELETE, value = "/favoris/titre")
    public Utilisateur deleteTitreFromFavorite(Authentication authentication, @RequestParam long titreId){
        return this.utilisateurService.deleteTitreFromFavorite(authentication.getName(), titreId);
    }

    @RequestMapping(method = RequestMethod.GET, value = "/favoris")
    public Favoris getFavoris(Authentication authentication){
        return this.utilisateurService.getFavoris(authentication.getName());
    }

    @RequestMapping(method = RequestMethod.POST, value = "/playlist")
    public Utilisateur createPlaylist(Authentication authentication, @RequestBody Playlist playlist){
        return this.utilisateurService.createPlaylist(authentication.getName(), playlist);
    }

    @RequestMapping(method = RequestMethod.POST, value = "/playlist/{playId}")
    public Utilisateur addTitreToPlaylist(Authentication authentication, @PathVariable(value = "playId") long playId, @RequestParam long titreId) throws PlaylistTitreExistException {
        return this.utilisateurService.addTitreToPlaylist(authentication.getName(), playId, titreId);
    }

    @RequestMapping(method = RequestMethod.DELETE, value = "/playlist/{playId}")
    public Utilisateur deleteTitreFromPlaylist(Authentication authentication, @PathVariable(value = "playId") long playId, @RequestParam long titreId){
        return this.utilisateurService.deleteTitreFromPlaylist(authentication.getName(), playId, titreId);
    }

    @RequestMapping(method = RequestMethod.DELETE, value = "/playlist")
    public Utilisateur deletePlaylist(Authentication authentication, @RequestParam long playId){
        return this.utilisateurService.deletePlaylist(authentication.getName(), playId);
    }

    @RequestMapping(method = RequestMethod.GET, value = "/playlist/{playId}")
    public Playlist getPlaylist(Authentication authentication, @PathVariable(value = "playId") long playId){
        return this.utilisateurService.getPlaylist(authentication.getName(), playId);
    }

    @RequestMapping(method = RequestMethod.GET, value = "/playlist")
    public List<Playlist> getAllPlaylist(Authentication authentication){
        return this.utilisateurService.getAllPlaylist(authentication.getName());
    }
}
