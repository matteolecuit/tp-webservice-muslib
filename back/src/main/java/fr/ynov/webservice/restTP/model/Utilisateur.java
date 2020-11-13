package fr.ynov.webservice.restTP.model;

import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;
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

    @OneToOne(targetEntity = Administrateur.class, cascade = CascadeType.ALL, fetch = FetchType.EAGER)
    private Administrateur admin;

    @OneToMany(targetEntity = Playlist.class, mappedBy="utilisateur")
    private List<Playlist> playlists = new ArrayList<>();

    @OneToOne(targetEntity = Favoris.class, cascade = CascadeType.ALL, fetch = FetchType.EAGER)
    private Favoris favoris;

    public Utilisateur(String email, String pseudo) {
        this.email = email;
        this.pseudo = pseudo;
    }
}
