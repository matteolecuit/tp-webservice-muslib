package fr.ynov.webservice.restTP.model;

import fr.ynov.webservice.restTP.entity.Album;
import fr.ynov.webservice.restTP.entity.Artiste;
import fr.ynov.webservice.restTP.entity.Titre;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import java.util.List;

@Getter
@Setter
@ToString
public class Favoris {

    private List<Titre> titres;

    private List<Artiste> artistes;

    private List<Album> albums;

    public Favoris(List<Titre> titres, List<Artiste> artistes, List<Album> albums) {
        this.titres = titres;
        this.artistes = artistes;
        this.albums = albums;
    }
}
