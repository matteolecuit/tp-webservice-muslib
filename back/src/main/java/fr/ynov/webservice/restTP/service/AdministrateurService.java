package fr.ynov.webservice.restTP.service;

import fr.ynov.webservice.restTP.model.Administrateur;
import fr.ynov.webservice.restTP.repository.AdministrateurRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class AdministrateurService {

    @Autowired
    AdministrateurRepository administrateurRepository;

    public Optional<Administrateur> findById(long id){
        return this.administrateurRepository.findById(id);
    }

    public Administrateur save(Administrateur admin){
        return this.administrateurRepository.save(admin);
    }
}
