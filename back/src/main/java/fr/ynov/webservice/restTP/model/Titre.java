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
@JsonIdentityInfo(
        generator = ObjectIdGenerators.PropertyGenerator.class,
        property = "id")
public class Titre {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    private int duree;

    private String nom;

    @ManyToMany(targetEntity = Artiste.class)
    private List<Artiste> artistes = new ArrayList<>();

    @ManyToOne(targetEntity = Album.class, cascade = CascadeType.ALL, fetch = FetchType.EAGER)
    private Album album;

    public Titre(int duree, String nom) {
        this.duree = duree;
        this.nom = nom;
    }
}
