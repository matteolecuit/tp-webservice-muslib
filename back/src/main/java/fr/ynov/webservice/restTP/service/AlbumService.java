package fr.ynov.webservice.restTP.service;

import fr.ynov.webservice.restTP.entity.Administrateur;
import fr.ynov.webservice.restTP.entity.Album;
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
    AdministrateurService administrateurService;

    public List<Album> findAll(){
        return this.albumRepository.findAll();
    }

    public Optional<Album> findById(long id){
        return this.albumRepository.findById(id);
    }

    public Album create(long adminId, Album album){
        Optional<Administrateur> adminOpt = this.administrateurService.findById(adminId);
        if (adminOpt.isPresent()){
            return this.albumRepository.save(album);
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
