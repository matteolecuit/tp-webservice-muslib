package fr.ynov.webservice.restTP.entity;

import com.fasterxml.jackson.annotation.JsonProperty;
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

    @Column(unique = true)
    private String email;

    private String avatar;

    private String pseudo;

    @JsonProperty(access = JsonProperty.Access.WRITE_ONLY)
    private String password;

    @Column(columnDefinition = "boolean default false", nullable = false)
    private boolean admin;

    @OneToMany(targetEntity = Playlist.class, cascade = CascadeType.ALL)
    private List<Playlist> playlists = new ArrayList<>();

    @OneToMany(targetEntity = Artiste.class)
    private List<Artiste> artistes = new ArrayList<>();

    @OneToMany(targetEntity = Album.class)
    private List<Album> albums = new ArrayList<>();

    @OneToMany(targetEntity = Titre.class)
    private List<Titre> titres = new ArrayList<>();

    public Utilisateur(String email, String pseudo, String password) {
        this.email = email;
        this.pseudo = pseudo;
        this.password = password;
    }

    public Utilisateur(String email, String pseudo, String password, boolean admin) {
        this.email = email;
        this.pseudo = pseudo;
        this.password = password;
        this.admin = admin;
    }
}
