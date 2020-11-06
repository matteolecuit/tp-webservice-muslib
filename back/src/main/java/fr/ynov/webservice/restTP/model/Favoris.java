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
public class Favoris {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @OneToOne(targetEntity = Utilisateur.class, mappedBy = "favoris")
    private Utilisateur users;

    @OneToMany(targetEntity = Titre.class, mappedBy="favoris")
    private List<Titre> titres;

    @OneToMany(targetEntity = Album.class, mappedBy="favoris")
    private List<Album> albums;

    @OneToMany(targetEntity = Artiste.class, mappedBy="favoris")
    private List<Artiste> artistes;

}
