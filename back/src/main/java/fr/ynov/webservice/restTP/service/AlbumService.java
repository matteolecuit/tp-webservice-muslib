package fr.ynov.webservice.restTP.service;

import fr.ynov.webservice.restTP.entity.Album;
import fr.ynov.webservice.restTP.entity.Titre;
import fr.ynov.webservice.restTP.entity.Utilisateur;
import fr.ynov.webservice.restTP.repository.AlbumRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class AlbumService {

    @Autowired
    AlbumRepository albumRepository;

    @Autowired
    UtilisateurService utilisateurService;

    public List<Album> findAll(){
        return this.albumRepository.findAll();
    }

    public Album findById(long id){
        Optional<Album> albumOpt = this.albumRepository.findById(id);;
        return albumOpt.orElse(null);
    }

    public Album findByIdAndIsLiked(String email, long id) {
        Album album = findById(id);
        if (album != null){

            Optional<Utilisateur> userOpt = this.utilisateurService.findByEmail(email);
            if (userOpt.isPresent()){

                List<Album> likedAlbum = userOpt.get().getAlbums();
                if (likedAlbum.contains(album)) {
                    album.setLike(true);
                }

            }

            return album;
        }
        return null;
    }

    public Album create(String email, Album album){
        Optional<Utilisateur> userOpt = this.utilisateurService.findByEmail(email);
        if (userOpt.isPresent() && userOpt.get().getAdmin()){
            return this.albumRepository.save(album);
        }
        return null;
    }

    public Album update(String email, long albumId, Album a) {
        Optional<Utilisateur> userOpt = this.utilisateurService.findByEmail(email);
        if (userOpt.isPresent() && userOpt.get().getAdmin()){
            Optional<Album> albumOpt = this.albumRepository.findById(albumId);
            if (albumOpt.isPresent()){
                Album album = albumOpt.get();
                if (a.getDatePublication() != null){
                    album.setDatePublication(a.getDatePublication());
                }
                if (a.getImageUrl() != null){
                    album.setImageUrl(a.getImageUrl());
                }
                if (a.getNom() != null && a.getNom().trim().length() > 0){
                    album.setNom(a.getNom());
                }
                if (a.getArtiste() != null){
                    album.setArtiste(a.getArtiste());
                }
                return this.albumRepository.save(album);
            }
        }
        return null;
    }

    public Album delete(String email, long albumId) {
        Optional<Utilisateur> userOpt = this.utilisateurService.findByEmail(email);
        if (userOpt.isPresent() && userOpt.get().getAdmin()) {
            Optional<Album> albumOpt = this.albumRepository.findById(albumId);
            if (albumOpt.isPresent()) {
                this.albumRepository.delete(albumOpt.get());
                return albumOpt.get();
            }
        }
        return null;
    }

    public List<Album> getRandom(int numberOfRandom){

        List<Album> randArtists = new ArrayList<>();

        List<Album> allAlbums = albumRepository.findAll();

        for (int i = 0; i < numberOfRandom; i++){
            int idx = (int)(Math.random() * (allAlbums.size()-1));
            if (idx < allAlbums.size()){
                randArtists.add(allAlbums.get(idx));
                allAlbums.remove(allAlbums.get(idx));
            }
        }

        return randArtists;
    }
}
