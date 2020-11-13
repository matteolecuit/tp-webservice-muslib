package fr.ynov.webservice.restTP.controller;

import fr.ynov.webservice.restTP.model.*;
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

    @RequestMapping(method = RequestMethod.GET, value = "")
    public void init(){

        System.out.println("utilisateurService");

        for (int i = 0; i < 5; i++){
            this.utilisateurService.save(new Utilisateur("test"+i+"@mail.com", "pseudo"+i));
        }

        System.out.println("albumService");

        for (int i = 0; i < 5; i++){
            this.albumService.save(new Album(Calendar.getInstance(), "album "+i, ""));
        }

        System.out.println("artisteService");

        for (int i = 0; i < 5; i++){
            Artiste art = new Artiste("art "+i, "");
            List<Album> albumList = albumService.getRandom(1);

            art.setAlbums(albumList);

            this.artisteService.save(art);
        }

        System.out.println("titreService");

        for (int i = 0; i < 5; i++){
            Titre titre = new Titre(180, "Titre "+i);
             List<Artiste> artisteList = this.artisteService.getRandom(1);
            
            titre.setArtistes(artisteList);
            titre.setAlbum(artisteList.get(0).getAlbums().get(0));
            this.titreService.save(titre);
        }

        System.out.println("playlistService");

        for (int i = 0; i < 5; i++){
            Playlist playlist = new Playlist("Playlist "+i);
            this.playlistService.save(playlist);
        }

        System.out.println("playlistService");

        for (int i = 0; i < 5; i++){
            this.playlistService.save(new Playlist("Playlist "+i));
        }

        System.out.println("favorisService");

    }
}
