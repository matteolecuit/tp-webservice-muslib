package fr.ynov.webservice.restTP.service;

import fr.ynov.webservice.restTP.entity.Album;
import fr.ynov.webservice.restTP.entity.Artiste;
import fr.ynov.webservice.restTP.entity.Titre;
import fr.ynov.webservice.restTP.entity.Utilisateur;
import fr.ynov.webservice.restTP.repository.UtilisateurRepository;
import org.apache.tomcat.jni.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class UtilisateurService {

    @Autowired
    UtilisateurRepository utilisateurRepository;

    @Autowired
    AlbumService albumService;

    @Autowired
    TitreService titreService;

    @Autowired
    ArtisteService artisteService;

    public List<Utilisateur> findAll(){
        return this.utilisateurRepository.findAll();
    }

    public Optional<Utilisateur> findById(long id){
        return this.utilisateurRepository.findById(id);
    }

    public Utilisateur save(Utilisateur utilisateur){
        return this.utilisateurRepository.save(utilisateur);
    }

    public Utilisateur addAlbumToPlaylist(long userId, Album album){
        Optional<Utilisateur> userOpt = this.findById(userId);
        if (userOpt.isPresent()){
            Optional<Album> albumOpt = this.albumService.findById(album.getId());
            if (albumOpt.isPresent()){
                Utilisateur user = userOpt.get();
                user.getAlbums().add(albumOpt.get());
                return this.save(user);
            }
        }
        return null;
    }

    public Utilisateur addArtisteToPlaylist(long userId, Artiste artiste){
        Optional<Utilisateur> userOpt = this.findById(userId);
        if (userOpt.isPresent()){
            Optional<Artiste> artisteOpt = this.artisteService.findById(artiste.getId());
            if (artisteOpt.isPresent()){
                Utilisateur user = userOpt.get();
                user.getArtistes().add(artisteOpt.get());
                return this.save(user);
            }
        }
        return null;
    }

    public Utilisateur addTitreToPlaylist(long userId, Titre titre){
        Optional<Utilisateur> userOpt = this.findById(userId);
        if (userOpt.isPresent()){
            Optional<Titre> titreOpt = this.titreService.findById(titre.getId());
            if (titreOpt.isPresent()){
                Utilisateur user = userOpt.get();
                user.getTitres().add(titreOpt.get());
                return this.save(user);
            }
        }
        return null;
    }

    public Utilisateur deleteAlbumToPlaylist(long userId, long albumId){
        Optional<Utilisateur> userOpt = this.findById(userId);
        if (userOpt.isPresent()) {
            Utilisateur user = userOpt.get();
            // retrouve l'album
            Optional<Album> album = user.getAlbums().stream().filter(albm -> albm.getId() == albumId).findFirst();
            if (album.isPresent()){
                // retire l'album de la liste du user
                user.getAlbums().remove(album.get());
                return this.utilisateurRepository.save(user);
            }

        }
        return null;
    }

    public Utilisateur deleteArtisteToPlaylist(long userId, long artisteId){
        Optional<Utilisateur> userOpt = this.findById(userId);
        if (userOpt.isPresent()) {
            Utilisateur user = userOpt.get();
            // retrouve l'artiste
            Optional<Artiste> artiste = user.getArtistes().stream().filter(art -> art.getId() == artisteId).findFirst();
            if (artiste.isPresent()){
                // retire l'artiste de la liste du user
                user.getArtistes().remove(artiste.get());
                return this.utilisateurRepository.save(user);
            }

        }
        return null;
    }

    public Utilisateur deleteTitreToPlaylist(long userId, long titreId){
        Optional<Utilisateur> userOpt = this.findById(userId);
        if (userOpt.isPresent()) {
            Utilisateur user = userOpt.get();
            // retrouve le titre
            Optional<Titre> titre = user.getTitres().stream().filter(ttre -> ttre.getId() == titreId).findFirst();
            if (titre.isPresent()){
                // retire le titre de la liste du user
                user.getTitres().remove(titre.get());
                return this.utilisateurRepository.save(user);
            }

        }
        return null;
    }

    public List<Utilisateur> getRandom(int numberOfRandom){

        List<Utilisateur> randUtilisateur = new ArrayList<>();

        List<Utilisateur> allUtilisateur = utilisateurRepository.findAll();

        for (int i = 0; i < numberOfRandom; i++){
            int idx = (int)(Math.random() * (allUtilisateur.size()-1));
            if (idx < allUtilisateur.size()){
                randUtilisateur.add(allUtilisateur.get(idx));
                allUtilisateur.remove(allUtilisateur.get(idx));
            }
        }

        return randUtilisateur;
    }
}
