package fr.ynov.webservice.restTP.service;

import fr.ynov.webservice.restTP.entity.Administrateur;
import fr.ynov.webservice.restTP.entity.Artiste;
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

    @Autowired
    AdministrateurService administrateurService;

    public List<Artiste> findAll(){
        return this.artisteRepository.findAll();
    }

    public Artiste create(long adminId, Artiste artiste){
        Optional<Administrateur> adminOpt = this.administrateurService.findById(adminId);
        if (adminOpt.isPresent()){
            return this.artisteRepository.save(artiste);
        }
        return null;
    }

    public Optional<Artiste> findById(long id){
        return this.artisteRepository.findById(id);
    }

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

    public Artiste update(long adminId, long artisteId, Artiste a) {
        Optional<Administrateur> adminOpt = this.administrateurService.findById(adminId);
        if (adminOpt.isPresent()){
            Optional<Artiste> artisteOpt = this.artisteRepository.findById(artisteId);
            if (artisteOpt.isPresent()){
                Artiste artiste = artisteOpt.get();
                if (a.getAlias() != null && a.getAlias().trim().length() > 0){
                    artiste.setAlias(a.getAlias());
                }
                if (a.getImageUrl() != null){
                    artiste.setImageUrl(a.getImageUrl());
                }
                return this.artisteRepository.save(artiste);
            }
        }
        return null;
    }

    public Artiste delete(long adminId, long artisteId) {
        Optional<Administrateur> adminOpt = this.administrateurService.findById(adminId);
        if (adminOpt.isPresent()) {
            Optional<Artiste> artisteOpt = this.artisteRepository.findById(artisteId);
            if (artisteOpt.isPresent()) {
                this.artisteRepository.delete(artisteOpt.get());
                return artisteOpt.get();
            }
        }
        return null;
    }
}
