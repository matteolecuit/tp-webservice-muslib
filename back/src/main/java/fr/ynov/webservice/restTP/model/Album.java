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
public class Album {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    private Calendar date_publication;

    private String nom;

    private String imageUrl;

    @OneToMany(targetEntity = Titre.class, mappedBy = "album")
    private List<Titre> titres;

    @ManyToMany(targetEntity = Artiste.class, cascade = CascadeType.ALL, fetch = FetchType.EAGER)
    private List<Artiste> artistes;

    @OneToOne(targetEntity = Favoris.class, cascade = CascadeType.ALL, fetch = FetchType.EAGER)
    private Favoris favoris;
}
