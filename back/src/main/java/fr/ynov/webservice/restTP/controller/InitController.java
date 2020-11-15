package fr.ynov.webservice.restTP.controller;

import fr.ynov.webservice.restTP.entity.*;
import fr.ynov.webservice.restTP.service.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.Calendar;
import java.util.List;

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
            this.utilisateurService.save(new Utilisateur("test"+i+"@mail.com", "pseudo"+i));
        }

        System.out.println("albumService");

        for (int i = 0; i < 5; i++){
            Album album = new Album(Calendar.getInstance(), "album "+i, "");
            this.albumService.create(1, album);
        }

        System.out.println("titreService");

        for (int i = 0; i < 5; i++){
            Titre titre = new Titre(180, "Titre "+i);
            Titre newTitre = this.titreService.create(1, titre);
            Album album = this.albumService.getRandom(1).get(0);
            album.getTitres().add(newTitre);
            this.albumService.create(1, album);
        }

        System.out.println("artisteService");

        for (int i = 0; i < 5; i++){
            Artiste art = new Artiste("art "+i, "");
            List<Album> albumList = albumService.getRandom(1);

            art.setAlbums(albumList);

            this.artisteService.create(1, art);
        }

        System.out.println("playlistService");

        for (int i = 0; i < 5; i++){
            Playlist playlist = this.playlistService.save(new Playlist("Playlist "+i));
            Utilisateur user = this.utilisateurService.getRandom(1).get(0);
            user.getPlaylists().add(playlist);
            this.utilisateurService.save(user);
        }

    }
}
