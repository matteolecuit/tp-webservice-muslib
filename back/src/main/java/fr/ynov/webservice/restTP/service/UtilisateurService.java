package fr.ynov.webservice.restTP.service;

import fr.ynov.webservice.restTP.entity.*;
import fr.ynov.webservice.restTP.exception.PlaylistTitreExistException;
import fr.ynov.webservice.restTP.model.Favoris;
import fr.ynov.webservice.restTP.repository.UtilisateurRepository;
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

    @Autowired
    PlaylistService playlistService;

    public Optional<Utilisateur> findById(long id){
        return this.utilisateurRepository.findById(id);
    }

    public List<Utilisateur> findAll(){
        return this.utilisateurRepository.findAll();
    }

    public Utilisateur save(Utilisateur utilisateur){
        return this.utilisateurRepository.save(utilisateur);
    }

    public Utilisateur addAlbumToFavorite(long userId, long albumId){
        Optional<Utilisateur> userOpt = this.utilisateurRepository.findById(userId);
        if (userOpt.isPresent()){
            Optional<Album> albumOpt = this.albumService.findById(albumId);
            if (albumOpt.isPresent()){
                Utilisateur user = userOpt.get();
                user.getAlbums().add(albumOpt.get());
                return this.utilisateurRepository.save(user);
            }
        }
        return null;
    }

    public Utilisateur deleteAlbumFromFavorite(long userId, long albumId){
        Optional<Utilisateur> userOpt = this.utilisateurRepository.findById(userId);
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

    public Utilisateur addArtisteToFavorite(long userId, long artisteId){
        Optional<Utilisateur> userOpt = this.utilisateurRepository.findById(userId);
        if (userOpt.isPresent()){
            Optional<Artiste> artisteOpt = this.artisteService.findById(artisteId);
            if (artisteOpt.isPresent()){
                Utilisateur user = userOpt.get();
                user.getArtistes().add(artisteOpt.get());
                return this.utilisateurRepository.save(user);
            }
        }
        return null;
    }

    public Utilisateur deleteArtisteFromFavorite(long userId, long artisteId){
        Optional<Utilisateur> userOpt = this.utilisateurRepository.findById(userId);
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

    public Utilisateur addTitreToFavorite(long userId, long titreId){
        Optional<Utilisateur> userOpt = this.utilisateurRepository.findById(userId);
        if (userOpt.isPresent()){
            Optional<Titre> titreOpt = this.titreService.findById(titreId);
            if (titreOpt.isPresent()){
                Utilisateur user = userOpt.get();
                user.getTitres().add(titreOpt.get());
                return this.utilisateurRepository.save(user);
            }
        }
        return null;
    }

    public Utilisateur deleteTitreFromFavorite(long userId, long titreId){
        Optional<Utilisateur> userOpt = this.utilisateurRepository.findById(userId);
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

    public Favoris getFavoris(long userId) {
        Optional<Utilisateur> userOpt = this.utilisateurRepository.findById(userId);
        if (userOpt.isPresent()){
            Utilisateur user = userOpt.get();
            return new Favoris(user.getTitres(), user.getArtistes(), user.getAlbums());
        }
        return null;
    }

    public Utilisateur createPlaylist(long userId, Playlist playlist){
        Optional<Utilisateur> userOpt = this.utilisateurRepository.findById(userId);
        if (userOpt.isPresent()){
            Utilisateur user = userOpt.get();
            user.getPlaylists().add(playlist);
            return this.utilisateurRepository.save(user);
        }
        return null;
    }

    public Utilisateur addTitreToPlaylist(long userId, long playId, long titreId) throws PlaylistTitreExistException {
        Optional<Utilisateur> userOpt = this.utilisateurRepository.findById(userId);
        if (userOpt.isPresent()){
            Utilisateur user = userOpt.get();
            Optional<Playlist> playlistOpt = user.getPlaylists().stream().filter(play -> play.getId() == playId).findFirst();
            if (playlistOpt.isPresent()){
                Optional<Titre> titreOpt = this.titreService.findById(titreId);
                if (titreOpt.isPresent()) {
                    Playlist playlist = playlistOpt.get();
                    playlist.getTitres().add(titreOpt.get());
                    try {
                        return this.utilisateurRepository.save(user);
                    }catch (Exception e){
                        System.out.println(e.getMessage());
                        throw new PlaylistTitreExistException("Titre déjà présent dans la playlist");
                    }
                }
            }
        }
        return null;
    }

    public Utilisateur deleteTitreFromPlaylist(long userId, long playId, long titreId) {
        Optional<Utilisateur> userOpt = this.utilisateurRepository.findById(userId);
        if (userOpt.isPresent()){
            Utilisateur user = userOpt.get();
            Optional<Playlist> playlistOpt = user.getPlaylists().stream().filter(play -> play.getId() == playId).findFirst();
            if (playlistOpt.isPresent()){
                Playlist playlist = playlistOpt.get();
                Optional<Titre> titreOpt = playlist.getTitres().stream().filter(titre -> titre.getId() == titreId).findFirst();
                if (titreOpt.isPresent()) {
                    playlist.getTitres().remove(titreOpt.get());
                    System.out.println(playlist);
                    return this.utilisateurRepository.save(user);
                }
            }
        }
        return null;
    }

    public Utilisateur deletePlaylist(long userId, long playId) {
        Optional<Utilisateur> userOpt = this.utilisateurRepository.findById(userId);
        if (userOpt.isPresent()) {
            Optional<Playlist> playlistOpt = userOpt.get().getPlaylists().stream().filter(play -> play.getId() == playId).findFirst();
            if (playlistOpt.isPresent()) {
                Playlist playlist = playlistOpt.get();
                this.playlistService.remove(playlist);

                Utilisateur user = userOpt.get();
                user.getPlaylists().remove(playlist);
                this.utilisateurRepository.save(user);

                return user;
            }
        }
        return null;
    }

    public Playlist getPlaylist(long userId, long playId) {
        Optional<Utilisateur> userOpt = this.utilisateurRepository.findById(userId);
        if (userOpt.isPresent()){
            Optional<Playlist> playlistOpt = userOpt.get().getPlaylists().stream().filter(play -> play.getId() == playId).findFirst();
            if (playlistOpt.isPresent()) {
                return playlistOpt.get();
            }
        }
        return null;
    }

    public List<Playlist> getAllPlaylist(long userId) {
        Optional<Utilisateur> userOpt = this.utilisateurRepository.findById(userId);
        return userOpt.map(Utilisateur::getPlaylists).orElse(null);
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
