package fr.ynov.webservice.restTP.service;

import fr.ynov.webservice.restTP.entity.Administrateur;
import fr.ynov.webservice.restTP.entity.Titre;
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

    @Autowired
    AdministrateurService administrateurService;

    public List<Titre> findAll(){
        return this.titreRepository.findAll();
    }

    public Optional<Titre> findById(long id){
        return this.titreRepository.findById(id);
    }

    public Titre create(long adminId, Titre titre){
        Optional<Administrateur> adminOpt = this.administrateurService.findById(adminId);
        if (adminOpt.isPresent()){
            return this.titreRepository.save(titre);
        }
        return null;
    }

    public Titre update(long adminId, long titreId, Titre t) {
        Optional<Administrateur> adminOpt = this.administrateurService.findById(adminId);
        if (adminOpt.isPresent()){
            Optional<Titre> titreOpt = this.titreRepository.findById(titreId);
            if (titreOpt.isPresent()){
                Titre titre = titreOpt.get();
                if (t.getNom() != null && t.getNom().trim().length() > 0){
                    titre.setNom(t.getNom());
                }
                if (t.getDuree() > 0){
                    titre.setDuree(t.getDuree());
                }
                return this.titreRepository.save(titre);
            }
        }
        return null;
    }

    public Titre delete(long adminId, long titreId) {
        Optional<Administrateur> adminOpt = this.administrateurService.findById(adminId);
        if (adminOpt.isPresent()) {
            Optional<Titre> titreOpt = this.titreRepository.findById(titreId);
            if (titreOpt.isPresent()) {
                this.titreRepository.delete(titreOpt.get());
                return titreOpt.get();
            }
        }
        return null;
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
