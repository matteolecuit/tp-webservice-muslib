package fr.ynov.webservice.restTP.entity;

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
public class Playlist {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    private String nom;

    @ManyToOne(targetEntity = Utilisateur.class, cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    private Utilisateur utilisateur;

    @OneToMany(targetEntity = Titre.class)
    private List<Titre> titres = new ArrayList<>();

    public Playlist(String nom) {
        this.nom = nom;
    }
}