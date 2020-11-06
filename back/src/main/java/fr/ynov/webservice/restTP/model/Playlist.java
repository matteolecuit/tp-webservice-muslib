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
public class Playlist {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @ManyToOne(targetEntity = Utilisateur.class, cascade = CascadeType.ALL, fetch = FetchType.EAGER)
    private Utilisateur utilisateur;

    @ManyToMany(targetEntity = Titre.class, mappedBy = "playlists")
    private List<Titre> titres;

}
