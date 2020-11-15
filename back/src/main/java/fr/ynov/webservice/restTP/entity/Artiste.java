package fr.ynov.webservice.restTP.entity;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

import javax.persistence.*;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

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

    @JsonIgnoreProperties({"artiste"})
    @ManyToMany(targetEntity = Album.class)
    private List<Album> albums = new ArrayList<>();

    public Artiste(String alias, String imageUrl) {
        this.alias = alias;
        this.imageUrl = imageUrl;
    }


}
