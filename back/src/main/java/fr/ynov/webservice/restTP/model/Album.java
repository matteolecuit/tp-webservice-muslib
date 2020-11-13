package fr.ynov.webservice.restTP.model;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.Calendar;
import java.util.List;

@Entity
@Getter
@Setter
@ToString
@NoArgsConstructor
public class Album {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    private Calendar date_publication;

    private String nom;

    private String imageUrl;

    @OneToMany(targetEntity = Titre.class, mappedBy = "album")
    private List<Titre> titres = new ArrayList<>();

    @ManyToMany(targetEntity = Artiste.class, mappedBy = "albums")
    private List<Artiste> artistes = new ArrayList<>();

    public Album(Calendar date_publication, String nom, String imageUrl) {
        this.date_publication = date_publication;
        this.nom = nom;
        this.imageUrl = imageUrl;
    }
}
