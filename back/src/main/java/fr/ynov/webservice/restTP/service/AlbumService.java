package fr.ynov.webservice.restTP.service;

import fr.ynov.webservice.restTP.model.Album;
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

    public Album save(Album album){
        return this.albumRepository.save(album);
    }

    public Optional<Album> findById(long id){
        return this.albumRepository.findById(id);
    }

}
