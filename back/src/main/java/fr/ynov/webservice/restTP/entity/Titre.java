package fr.ynov.webservice.restTP.entity;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

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
    
    private String imageUrl;

    public Titre(int duree, String nom, String imageUrl) {
        this.duree = duree;
        this.nom = nom;
        this.imageUrl = imageUrl;
    }

}
