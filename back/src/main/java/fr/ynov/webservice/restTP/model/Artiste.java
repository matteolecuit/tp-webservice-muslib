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
public class Artiste {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    private String alias;

    private String imageUrl;

    @ManyToMany(targetEntity = Titre.class, mappedBy = "artistes")
    private List<Titre> titres;

    @ManyToMany(targetEntity = Album.class, mappedBy="artistes")
    private List<Album> albums;

    @OneToOne(targetEntity = Favoris.class, cascade = CascadeType.ALL, fetch = FetchType.EAGER)
    private Favoris favoris;
}
