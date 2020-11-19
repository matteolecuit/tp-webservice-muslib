package fr.ynov.webservice.restTP.entity;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

import javax.persistence.*;

@Entity
@Getter
@Setter
@ToString
@NoArgsConstructor
public class Titre {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    private int duree;

    private String nom;

    @JsonIgnoreProperties({"titres"})
    @ManyToOne
    private Album album;

    public Titre(int duree, String nom) {
        this.duree = duree;
        this.nom = nom;
    }

}
