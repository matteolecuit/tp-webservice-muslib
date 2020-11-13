package fr.ynov.webservice.restTP.model;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToMany;
import javax.persistence.ManyToOne;

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

    @ManyToMany(targetEntity = Artiste.class)
    private List<Artiste> artistes = new ArrayList<>();

    @ManyToOne(targetEntity = Album.class, cascade = CascadeType.ALL, fetch = FetchType.EAGER)
    private Album album;

    public Titre(int duree, String nom) {
        this.duree = duree;
        this.nom = nom;
    }
    public Titre() {
    	super();
    }
	public int getDuree() {
		return duree;
	}
	public void setDuree(int duree) {
		this.duree = duree;
	}
	public String getNom() {
		return nom;
	}
	public void setNom(String nom) {
		this.nom = nom;
	}
	public List<Artiste> getArtistes() {
		return artistes;
	}
	public void setArtistes(List<Artiste> artistes) {
		this.artistes = artistes;
	}
	public Album getAlbum() {
		return album;
	}
	public void setAlbum(Album album) {
		this.album = album;
	}
    
}
