package fr.ynov.webservice.restTP.service;

import fr.ynov.webservice.restTP.model.Artiste;
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

    public Artiste save(Artiste artiste){
        return this.artisteRepository.save(artiste);
    }

    public Optional<Artiste> findById(long id){
        return this.artisteRepository.findById(id);
    }

}
