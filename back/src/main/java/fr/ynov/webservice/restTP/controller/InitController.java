package fr.ynov.webservice.restTP.controller;

import fr.ynov.webservice.restTP.entity.Album;
import fr.ynov.webservice.restTP.entity.Artiste;
import fr.ynov.webservice.restTP.entity.Titre;
import fr.ynov.webservice.restTP.entity.Utilisateur;
import fr.ynov.webservice.restTP.service.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;

import java.util.Calendar;
import java.util.GregorianCalendar;

@RestController
@RequestMapping(value = "/")
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

    @RequestMapping(method = RequestMethod.GET, value = "init")
    public void init(){

        createUsers();
        createArtistes();
        createAlbums();

        //System.out.println("playlistService");
        //
        //for (int i = 0; i < 5; i++){
        //    Utilisateur user = this.utilisateurService.getRandom(1).get(0);
        //    this.utilisateurService.createPlaylist(user.getEmail(), new Playlist("Playlist "+i));
        //}

    }

    private void createUsers() {
        System.out.println("utilisateurService");
        this.utilisateurService.create(new Utilisateur("admin@mail.com", "super admin", "pwd", true, "https://tinyurl.com/y4n5vuxr"));
        this.utilisateurService.create(new Utilisateur("user1@mail.com", "Fiona Human", "pwd", false, "https://tinyurl.com/y6ev9ym5"));
        this.utilisateurService.create(new Utilisateur("user2@mail.com", "Donkey Superfan", "pwd", false, "https://tinyurl.com/y4n69s3f"));
    }

    private void createArtistes() {
        System.out.println("artisteService");
        Utilisateur user = this.utilisateurService.findAll().get(0);
        this.artisteService.create(user.getEmail(), new Artiste("Jul", "https://tinyurl.com/y4ul3clt"));
        this.artisteService.create(user.getEmail(), new Artiste("Big Ali", "https://tinyurl.com/yxbrtkmb"));
        this.artisteService.create(user.getEmail(), new Artiste("JPEGMAFIA", "https://tinyurl.com/y62lp6vt"));
        this.artisteService.create(user.getEmail(), new Artiste("Dire Straits", "https://tinyurl.com/y2zopebq"));
    }


    private void createAlbums() {
        System.out.println("albumService");
        Utilisateur user = this.utilisateurService.findAll().get(0);
        Artiste artiste = this.artisteService.findAll().get(0);
        String imageUrl = "https://tinyurl.com/yxma5n6m";
        this.albumService.create(user.getEmail(), new Album(new GregorianCalendar(2020, Calendar.JUNE, 18), "La Machine", imageUrl, artiste));
        Album album = this.albumService.findAll().get(0);
        this.titreService.create(user.getEmail(), new Titre(235, "Folie", imageUrl, album));
        this.titreService.create(user.getEmail(), new Titre(212, "Italia", imageUrl, album));
        this.titreService.create(user.getEmail(), new Titre(224, "Ça sent bon", imageUrl, album));
        this.titreService.create(user.getEmail(), new Titre(192, "Pour la street", imageUrl, album));
        imageUrl = "https://tinyurl.com/y6ejm2st";
        this.albumService.create(user.getEmail(), new Album(new GregorianCalendar(2019, Calendar.JUNE, 14), "Rien 100 Rien", imageUrl, artiste));
        album = this.albumService.findAll().get(1);
        this.titreService.create(user.getEmail(), new Titre(160, "La Bandite", imageUrl, album));
        this.titreService.create(user.getEmail(), new Titre(194, "Jcvd", imageUrl, album));
        this.titreService.create(user.getEmail(), new Titre(192, "Salvatrucha", imageUrl, album));
        this.titreService.create(user.getEmail(), new Titre(211, "Tokyo", imageUrl, album));
        artiste = this.artisteService.findAll().get(1);
        imageUrl = "https://tinyurl.com/yxn77p3n";
        this.albumService.create(user.getEmail(), new Album(new GregorianCalendar(2008, Calendar.MARCH, 27), "Louder", imageUrl, artiste));
        album = this.albumService.findAll().get(2);
        this.titreService.create(user.getEmail(), new Titre(315, "Louder", imageUrl, album));
        this.titreService.create(user.getEmail(), new Titre(192, "Hit the floor", imageUrl, album));
        this.titreService.create(user.getEmail(), new Titre(256, "Hunger", imageUrl, album));
        artiste = this.artisteService.findAll().get(2);
        imageUrl = "https://tinyurl.com/y33ogj2l";
        this.albumService.create(user.getEmail(), new Album(new GregorianCalendar(2018, Calendar.JANUARY, 19), "Veteran", imageUrl, artiste));
        album = this.albumService.findAll().get(3);
        this.titreService.create(user.getEmail(), new Titre(157, "1539 N. Calvert", imageUrl, album));
        this.titreService.create(user.getEmail(), new Titre(151, "Real Nega", imageUrl, album));
        this.titreService.create(user.getEmail(), new Titre(198, "Thug Tears", imageUrl, album));
        this.titreService.create(user.getEmail(), new Titre(85, "Dayum", imageUrl, album));
        this.titreService.create(user.getEmail(), new Titre(152, "Baby I'm Bleeding", imageUrl, album));
        artiste = this.artisteService.findAll().get(3);
        imageUrl = "https://tinyurl.com/y5ukwaxn";
        this.albumService.create(user.getEmail(), new Album(new GregorianCalendar(1985, Calendar.MAY, 13), "Brothers in Arms", imageUrl, artiste));
        album = this.albumService.findAll().get(4);
        this.titreService.create(user.getEmail(), new Titre(239, "So Far Away", imageUrl, album));
        this.titreService.create(user.getEmail(), new Titre(424, "Money for Nothing", imageUrl, album));
        this.titreService.create(user.getEmail(), new Titre(252, "Walk of Life", imageUrl, album));
        this.titreService.create(user.getEmail(), new Titre(246, "Your Latest Trick", imageUrl, album));
        this.titreService.create(user.getEmail(), new Titre(322, "Why Worry", imageUrl, album));

    }

    @RequestMapping(method = RequestMethod.GET, value = "doc")
    public ModelAndView doc(){
        return new ModelAndView("redirect:http://localhost:8080/apidocs/index.html");
    }
}
