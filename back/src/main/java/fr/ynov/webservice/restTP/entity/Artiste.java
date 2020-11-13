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
public class Artiste {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    private String alias;

    private String imageUrl;

    @OneToMany(targetEntity = Titre.class)
    private List<Titre> titres = new ArrayList<>();

    @ManyToMany(targetEntity = Album.class)
    private List<Album> albums = new ArrayList<>();

    public Artiste(String alias, String imageUrl) {
        this.alias = alias;
        this.imageUrl = imageUrl;
    }


}
