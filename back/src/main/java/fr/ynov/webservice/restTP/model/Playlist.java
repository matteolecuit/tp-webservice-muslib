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
public class Playlist {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    private String nom;

    @ManyToOne(targetEntity = Utilisateur.class, cascade = CascadeType.ALL, fetch = FetchType.EAGER)
    private Utilisateur utilisateur;

    @ManyToOne(targetEntity = Titre.class)
    private List<Titre> titres = new ArrayList<>();

    public Playlist(String nom) {
        this.nom = nom;
    }
}
