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
            this.utilisateurService.save(new Utilisateur("test"+i+"@mail.com", "pseudo"+i, "pwd"));
        }

        System.out.println("artisteService");

        for (int i = 0; i < 5; i++){
            Artiste art = new Artiste("art "+i, "https://e-cdn-images.dzcdn.net/images/artist/4ad5a1a6eebec66da3db5796d947be01/264x264-000000-80-0-0.jpg");
            this.artisteService.create(1, art);
        }

        System.out.println("albumService");

        for (int i = 0; i < 5; i++){
            Album album = new Album(Calendar.getInstance(), "album "+i, "https://e-cdns-images.dzcdn.net/images/cover/5722e04a2ba2539c02ac2afb655a4f93/264x264-000000-80-0-0.jpg");
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

        System.out.println("artisteService");

        for (int i = 0; i < 5; i++){
            Artiste art = new Artiste("art "+i, "");
            List<Album> albumList = albumService.getRandom(1);

            art.setAlbums(albumList);

            this.artisteService.create(1, art);
        }

        System.out.println("playlistService");

        for (int i = 0; i < 5; i++){
            Utilisateur user = this.utilisateurService.getRandom(1).get(0);
            this.utilisateurService.createPlaylist(user.getEmail(), new Playlist("Playlist "+i));
        }

    }
}
