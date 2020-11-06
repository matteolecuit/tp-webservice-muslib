package fr.ynov.webservice.restTP.model;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import javax.persistence.*;
import java.util.Calendar;
import java.util.List;

@Entity
@Getter
@Setter
@ToString
public class Titre {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    private Calendar duree;

    private String nom;

    @ManyToMany(targetEntity = Artiste.class)
    private List<Artiste> artistes;

    @ManyToOne(targetEntity = Titre.class, cascade = CascadeType.ALL, fetch = FetchType.EAGER)
    private Album album;

    @ManyToMany(targetEntity = Playlist.class)
    private List<Playlist> playlists;

    @OneToOne(targetEntity = Favoris.class, cascade = CascadeType.ALL, fetch = FetchType.EAGER)
    private Favoris favoris;
}
