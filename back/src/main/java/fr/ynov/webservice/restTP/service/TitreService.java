package fr.ynov.webservice.restTP.service;

import fr.ynov.webservice.restTP.model.Titre;
import fr.ynov.webservice.restTP.repository.TitreRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class TitreService {

    @Autowired
    TitreRepository titreRepository;

    public Titre add(Titre titre){
        return this.titreRepository.save(titre);
    }

    public Optional<Titre> findById(long id){
        return this.titreRepository.findById(id);
    }

    public List<Titre> getRandom(int numberOfRandom){

        List<Titre> randTitres = new ArrayList<>();

        List<Titre> allArtists = titreRepository.findAll();

        for (int i = 0; i < numberOfRandom; i++){
            int idx = (int)(Math.random() * (allArtists.size()-1));
            if (idx < allArtists.size()){
                randTitres.add(allArtists.get(idx));
                allArtists.remove(allArtists.get(idx));
            }
        }

        return randTitres;
    }
}