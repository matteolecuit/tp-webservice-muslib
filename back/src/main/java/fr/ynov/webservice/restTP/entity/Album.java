package fr.ynov.webservice.restTP.entity;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
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

    private Calendar datePublication;

    private String nom;

    private String imageUrl;
    
    @JsonIgnoreProperties({"albums"})
    @ManyToOne(targetEntity = Artiste.class)
    private Artiste artiste;

    @JsonIgnoreProperties({"album"})
    @OneToMany(mappedBy = "album", cascade = CascadeType.ALL)
    private List<Titre> titres = new ArrayList<>();

    public Album(Calendar datePublication, String nom, String imageUrl) {
        this.datePublication = datePublication;
        this.nom = nom;
        this.imageUrl = imageUrl;
    }
}
