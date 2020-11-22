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

    @ManyToMany(targetEntity = Titre.class, cascade = CascadeType.ALL, fetch = FetchType.EAGER)
    @JoinTable(uniqueConstraints = {@UniqueConstraint(columnNames={"playlist_id", "titres_id"})})
    private List<Titre> titres = new ArrayList<>();

    public Playlist(String nom) {
        this.nom = nom;
    }
}
