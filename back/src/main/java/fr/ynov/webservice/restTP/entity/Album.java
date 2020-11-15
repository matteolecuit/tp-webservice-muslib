package fr.ynov.webservice.restTP.entity;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

import javax.persistence.*;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

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

    private String image_url;
    
    @JsonIgnoreProperties({"albums"})
    @ManyToOne
    private Artiste artiste;

    @OneToMany(targetEntity = Titre.class)
    private List<Titre> titres = new ArrayList<>();

    public Album(Calendar date_publication, String nom, String image_url) {
        this.date_publication = date_publication;
        this.nom = nom;
        this.image_url = image_url;
    }
}
