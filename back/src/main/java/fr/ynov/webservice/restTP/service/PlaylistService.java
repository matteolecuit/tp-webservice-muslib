package fr.ynov.webservice.restTP.service;

import fr.ynov.webservice.restTP.entity.Playlist;
import fr.ynov.webservice.restTP.repository.PlaylistRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class PlaylistService {

    @Autowired
    PlaylistRepository playlistRepository;

    public Optional<Playlist> findById(long id){
        return this.playlistRepository.findById(id);
    }

    public Playlist save(Playlist playlist){
        return this.playlistRepository.save(playlist);
    }
}
