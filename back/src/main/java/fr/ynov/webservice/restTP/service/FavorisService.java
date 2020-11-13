package fr.ynov.webservice.restTP.service;

import fr.ynov.webservice.restTP.model.Favoris;
import fr.ynov.webservice.restTP.repository.FavorisRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class FavorisService {

    @Autowired
    FavorisRepository favorisRepository;

    public Favoris add(Favoris favoris){
        return this.favorisRepository.save(favoris);
    }

    public Optional<Favoris> findById(long id){
        return this.favorisRepository.findById(id);
    }

}
