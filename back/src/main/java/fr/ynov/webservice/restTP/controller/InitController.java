package fr.ynov.webservice.restTP.controller;

import fr.ynov.webservice.restTP.entity.*;
import fr.ynov.webservice.restTP.service.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.Calendar;

@RestController
@RequestMapping(value = "init")
public class InitController {

    @Autowired
    UtilisateurService utilisateurService;

    @Autowired
    TitreService titreService;

    @Autowired
    ArtisteService artisteService;

    @Autowired
    AlbumService albumService;

    @Autowired
    PlaylistService playlistService;

    @Autowired
    AdministrateurService administrateurService;

    @RequestMapping(method = RequestMethod.GET, value = "")
    public void init(){

        System.out.println("administrateurService");
        this.administrateurService.save(new Administrateur("admin@admin.com", "Admin"));

        System.out.println("utilisateurService");

        for (int i = 0; i < 5; i++){
            this.utilisateurService.save(new Utilisateur("test"+i+"@mail.com", "pseudo"+i, "pwd"));
        }

        System.out.println("artisteService");

        for (int i = 0; i < 5; i++){
            Artiste art = new Artiste("art "+i, "");
            this.artisteService.create(1, art);
        }

        System.out.println("albumService");

        for (int i = 0; i < 5; i++){
            Album album = new Album(Calendar.getInstance(), "album "+i, "");
            Artiste artiste = this.artisteService.getRandom(1).get(0);
            album.setArtiste(artiste);
            this.albumService.create(1, album);
        }

        System.out.println("titreService");

        for (int i = 0; i < 5; i++){
            Titre titre = new Titre(180, "Titre "+i);
            titre.setAlbum(this.albumService.getRandom(1).get(0));
            this.titreService.create(1, titre);
        }

        System.out.println("playlistService");

        for (int i = 0; i < 5; i++){
            Utilisateur user = this.utilisateurService.getRandom(1).get(0);
            this.utilisateurService.createPlaylist(user.getEmail(), new Playlist("Playlist "+i));
        }

    }
}
