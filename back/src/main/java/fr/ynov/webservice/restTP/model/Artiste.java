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
public class Artiste {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    private String alias;

    private String imageUrl;

    @ManyToMany(targetEntity = Titre.class, mappedBy = "artistes", cascade = CascadeType.ALL)
    private List<Titre> titres = new ArrayList<>();

    @ManyToMany(targetEntity = Album.class, cascade = CascadeType.ALL)
    private List<Album> albums = new ArrayList<>();

    public Artiste(String alias, String imageUrl) {
        this.alias = alias;
        this.imageUrl = imageUrl;
    }


}
