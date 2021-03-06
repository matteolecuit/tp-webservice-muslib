package fr.ynov.webservice.restTP.service;

import fr.ynov.webservice.restTP.entity.Album;
import fr.ynov.webservice.restTP.entity.Artiste;
import fr.ynov.webservice.restTP.entity.Titre;
import fr.ynov.webservice.restTP.entity.Utilisateur;
import fr.ynov.webservice.restTP.repository.ArtisteRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class ArtisteService {

    @Autowired
    ArtisteRepository artisteRepository;

    @Autowired
    UtilisateurService utilisateurService;
    
    public List<Artiste> findAll(){
        return this.artisteRepository.findAll();
    }

    public Artiste findById(long id){
        Optional<Artiste> artisteOpt = this.artisteRepository.findById(id);
        return artisteOpt.orElse(null);
    }

    public Artiste findByIdAndIsLiked(String email, long id) {
        Artiste artiste = findById(id);
        if (artiste != null){

            Optional<Utilisateur> userOpt = this.utilisateurService.findByEmail(email);
            if (userOpt.isPresent()){

                List<Artiste> likedArtiste = userOpt.get().getArtistes();
                if (likedArtiste.contains(artiste)) {
                    artiste.setLike(true);
                }

            }

            return artiste;
        }
        return null;
    }

    public Artiste create(String email, Artiste artiste){
        Optional<Utilisateur> userOpt = this.utilisateurService.findByEmail(email);
        if (userOpt.isPresent() && userOpt.get().getAdmin()){
            return this.artisteRepository.save(artiste);
        }
        return null;
    }

    public Artiste update(String email, long artisteId, Artiste a) {
        Optional<Utilisateur> userOpt = this.utilisateurService.findByEmail(email);
        if (userOpt.isPresent() && userOpt.get().getAdmin()){
            Optional<Artiste> artisteOpt = this.artisteRepository.findById(artisteId);
            if (artisteOpt.isPresent()){
                Artiste artiste = artisteOpt.get();
                if (a.getAlias() != null && a.getAlias().trim().length() > 0){
                    artiste.setAlias(a.getAlias());
                }
                if (a.getImageUrl() != null){
                    artiste.setImageUrl(a.getImageUrl());
                }
                return this.artisteRepository.save(artiste);
            }
        }
        return null;
    }

    public Artiste delete(String email, long artisteId) {
        Optional<Utilisateur> userOpt = this.utilisateurService.findByEmail(email);
        if (userOpt.isPresent() && userOpt.get().getAdmin()) {
            Optional<Artiste> artisteOpt = this.artisteRepository.findById(artisteId);
            if (artisteOpt.isPresent()) {
                Artiste artiste = artisteOpt.get();
                //delete all artiste favourite
                for (Utilisateur user : this.utilisateurService.findAll()) {
                    //delete album favourite of the artiste
                    for (Album album : artiste.getAlbums()) {
                        //delete titre favourite of the album
                        for (Titre titre : album.getTitres()) {
                            user.getTitres().remove(titre);
                        }
                        user.getAlbums().remove(album);
                    }
                    user.getArtistes().remove(artiste);
                }
                this.artisteRepository.delete(artiste);
                return artiste;
            }
        }
        return null;
    }

    public List<Artiste> getRandom(int numberOfRandom){

        List<Artiste> randArtists = new ArrayList<>();

        List<Artiste> allArtists = artisteRepository.findAll();

        for (int i = 0; i < numberOfRandom; i++){
            int idx = (int)(Math.random() * (allArtists.size()-1));
            if (idx < allArtists.size()){
                randArtists.add(allArtists.get(idx));
                allArtists.remove(allArtists.get(idx));
            }
        }

        return randArtists;
    }
}
