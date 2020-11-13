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
public class Favoris {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @OneToOne(targetEntity = Utilisateur.class, mappedBy = "favoris")
    private Utilisateur users;

    @OneToMany(targetEntity = Titre.class, cascade = CascadeType.ALL)
    private List<Titre> titres = new ArrayList<>();

    @OneToMany(targetEntity = Album.class, cascade = CascadeType.ALL)
    private List<Album> albums = new ArrayList<>();

    @OneToMany(targetEntity = Artiste.class, cascade = CascadeType.ALL)
    private List<Artiste> artistes = new ArrayList<>();

    public Favoris(Utilisateur users) {
        this.users = users;
    }
}
