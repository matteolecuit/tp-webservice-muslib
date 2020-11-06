package fr.ynov.webservice.restTP.model;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import javax.persistence.*;
import java.util.List;

@Entity
@Getter
@Setter
@ToString
public class Utilisateur {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    private String email;

    private String avatar;

    private String pseudo;

    @OneToOne(targetEntity = Administrateur.class, cascade = CascadeType.ALL, fetch = FetchType.EAGER)
    private Administrateur admin;

    @OneToMany(targetEntity = Playlist.class, mappedBy="utilisateur")
    private List<Playlist> playlists;

    @OneToOne(targetEntity = Favoris.class, cascade = CascadeType.ALL, fetch = FetchType.EAGER)
    private Favoris favoris;

}
