package fr.ynov.webservice.restTP.service;

import fr.ynov.webservice.restTP.entity.*;
import fr.ynov.webservice.restTP.exception.PlaylistTitreExistException;
import fr.ynov.webservice.restTP.model.Favoris;
import fr.ynov.webservice.restTP.repository.UtilisateurRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import java.util.Optional;

@Service
public class UtilisateurService implements UserDetailsService {

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

    private final BCryptPasswordEncoder bCryptPasswordEncoder;

    public UtilisateurService(BCryptPasswordEncoder bCryptPasswordEncoder){
        this.bCryptPasswordEncoder = bCryptPasswordEncoder;
    }

    public Optional<Utilisateur> findById(long id){
        return this.utilisateurRepository.findById(id);
    }

    public Optional<Utilisateur> findByEmail(String email){
        return this.utilisateurRepository.findByEmail(email);
    }

    public List<Utilisateur> findAll(){
        return this.utilisateurRepository.findAll();
    }

    public Utilisateur save(Utilisateur utilisateur){
        if (utilisateur.getPassword() != null && utilisateur.getPassword().trim().length() > 0 &&
            utilisateur.getEmail() != null && utilisateur.getEmail().trim().length() > 0 &&
            utilisateur.getPseudo() != null && utilisateur.getPseudo().trim().length() > 0) {
            utilisateur.setPassword(bCryptPasswordEncoder.encode(utilisateur.getPassword()));
            return this.utilisateurRepository.save(utilisateur);
        }
        return null;
    }

    @Override
    public UserDetails loadUserByUsername(String login) throws UsernameNotFoundException {
        // try by email
        Optional<Utilisateur> userOpt = utilisateurRepository.findByEmail(login);
        if (!userOpt.isPresent()) {
            //try by pseudo
            userOpt = utilisateurRepository.findByPseudo(login);
        }
        if (userOpt.isPresent()){
            Utilisateur user = userOpt.get();
            return new User(user.getEmail(), user.getPassword(), Collections.emptyList());
        }else{
            throw new UsernameNotFoundException(login);
        }

    }

    public Utilisateur addAlbumToFavorite(String email, long albumId){
        Optional<Utilisateur> userOpt = this.utilisateurRepository.findByEmail(email);
        if (userOpt.isPresent() && !userOpt.get().isAdmin()){
            Optional<Album> albumOpt = this.albumService.findById(albumId);
            if (albumOpt.isPresent()){
                Utilisateur user = userOpt.get();
                user.getAlbums().add(albumOpt.get());
                return this.utilisateurRepository.save(user);
            }
        }
        return null;
    }

    public Utilisateur deleteAlbumFromFavorite(String email, long albumId){
        Optional<Utilisateur> userOpt = this.utilisateurRepository.findByEmail(email);
        if (userOpt.isPresent() && !userOpt.get().isAdmin()) {
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

    public Utilisateur addArtisteToFavorite(String email, long artisteId){
        Optional<Utilisateur> userOpt = this.utilisateurRepository.findByEmail(email);
        if (userOpt.isPresent() && !userOpt.get().isAdmin()){
            Optional<Artiste> artisteOpt = this.artisteService.findById(artisteId);
            if (artisteOpt.isPresent()){
                Utilisateur user = userOpt.get();
                user.getArtistes().add(artisteOpt.get());
                return this.utilisateurRepository.save(user);
            }
        }
        return null;
    }

    public Utilisateur deleteArtisteFromFavorite(String email, long artisteId){
        Optional<Utilisateur> userOpt = this.utilisateurRepository.findByEmail(email);
        if (userOpt.isPresent() && !userOpt.get().isAdmin()) {
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

    public Utilisateur addTitreToFavorite(String email, long titreId){
        Optional<Utilisateur> userOpt = this.utilisateurRepository.findByEmail(email);
        if (userOpt.isPresent() && !userOpt.get().isAdmin()){
            Optional<Titre> titreOpt = this.titreService.findById(titreId);
            if (titreOpt.isPresent()){
                Utilisateur user = userOpt.get();
                user.getTitres().add(titreOpt.get());
                return this.utilisateurRepository.save(user);
            }
        }
        return null;
    }

    public Utilisateur deleteTitreFromFavorite(String email, long titreId){
        Optional<Utilisateur> userOpt = this.utilisateurRepository.findByEmail(email);
        if (userOpt.isPresent() && !userOpt.get().isAdmin()) {
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

    public Favoris getFavoris(String email) {
        Optional<Utilisateur> userOpt = this.utilisateurRepository.findByEmail(email);
        if (userOpt.isPresent() && !userOpt.get().isAdmin()){
            Utilisateur user = userOpt.get();
            return new Favoris(user.getTitres(), user.getArtistes(), user.getAlbums());
        }
        return null;
    }

    public Utilisateur createPlaylist(String email, Playlist playlist){
        Optional<Utilisateur> userOpt = this.utilisateurRepository.findByEmail(email);
        if (userOpt.isPresent() && !userOpt.get().isAdmin()){
            Utilisateur user = userOpt.get();
            Playlist newPlaylist = this.playlistService.save(playlist);
            user.getPlaylists().add(newPlaylist);
            return this.utilisateurRepository.save(user);
        }
        return null;
    }

    public Utilisateur addTitreToPlaylist(String email, long playId, long titreId) throws PlaylistTitreExistException {
        Optional<Utilisateur> userOpt = this.utilisateurRepository.findByEmail(email);
        if (userOpt.isPresent() && !userOpt.get().isAdmin()){
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

    public Utilisateur deleteTitreFromPlaylist(String email, long playId, long titreId) {
        Optional<Utilisateur> userOpt = this.utilisateurRepository.findByEmail(email);
        if (userOpt.isPresent() && !userOpt.get().isAdmin()){
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

    public Utilisateur deletePlaylist(String email, long playId) {
        Optional<Utilisateur> userOpt = this.utilisateurRepository.findByEmail(email);
        if (userOpt.isPresent() && !userOpt.get().isAdmin()) {
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

    public Playlist getPlaylist(String email, long playId) {
        Optional<Utilisateur> userOpt = this.utilisateurRepository.findByEmail(email);
        if (userOpt.isPresent() && !userOpt.get().isAdmin()){
            Optional<Playlist> playlistOpt = userOpt.get().getPlaylists().stream().filter(play -> play.getId() == playId).findFirst();
            if (playlistOpt.isPresent()) {
                return playlistOpt.get();
            }
        }
        return null;
    }

    public List<Playlist> getAllPlaylist(String email) {
        Optional<Utilisateur> userOpt = this.utilisateurRepository.findByEmail(email);
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

    public Utilisateur update(String email, Utilisateur u) {
        Optional<Utilisateur> userOpt = this.utilisateurRepository.findByEmail(email);
        if (userOpt.isPresent()){
            Utilisateur user = userOpt.get();
            if (u.getPseudo() != null && u.getPseudo().trim().length() > 0){
                user.setPseudo(u.getPseudo());
            }
            if (u.getAvatar() != null){
                user.setAvatar(u.getAvatar());
            }
            return this.utilisateurRepository.save(user);
        }
        return null;
    }
}
