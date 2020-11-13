package fr.ynov.webservice.restTP.entity;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Getter
@Setter
@ToString
@NoArgsConstructor
public class Utilisateur {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    private String email;

    private String avatar;

    private String pseudo;

    @OneToMany(targetEntity = Playlist.class, mappedBy = "utilisateur")
    private List<Playlist> playlists = new ArrayList<>();

    @OneToMany(targetEntity = Artiste.class)
    private List<Artiste> artistes = new ArrayList<>();

    @OneToMany(targetEntity = Album.class)
    private List<Album> albums = new ArrayList<>();

    @OneToMany(targetEntity = Titre.class)
    private List<Titre> titres = new ArrayList<>();

    public Utilisateur(String email, String pseudo) {
        this.email = email;
        this.pseudo = pseudo;
    }
}
