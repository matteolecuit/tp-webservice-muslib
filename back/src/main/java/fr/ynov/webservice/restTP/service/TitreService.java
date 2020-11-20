package fr.ynov.webservice.restTP.service;

import fr.ynov.webservice.restTP.entity.Titre;
import fr.ynov.webservice.restTP.entity.Utilisateur;
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
    UtilisateurService utilisateurService;
     
    public List<Titre> findAll(String email){
        List<Titre> titres = this.titreRepository.findAll();

        Optional<Utilisateur> userOpt = this.utilisateurService.findByEmail(email);
        if (userOpt.isPresent()){
            List<Titre> likedTitre = userOpt.get().getTitres();
            for (Titre t : titres) {
                if (likedTitre.contains(t)) {
                    t.setLike(true);
                }
            }
        }

        return titres;
    }

    public Optional<Titre> findById(long id){
        return this.titreRepository.findById(id);
    }

    public Titre create(String email, Titre titre){
        Optional<Utilisateur> userOpt = this.utilisateurService.findByEmail(email);
        if (userOpt.isPresent() && userOpt.get().getAdmin()){
            return this.titreRepository.save(titre);
        }
        return null;
    }

    public Titre update(String email, long titreId, Titre t) {
        Optional<Utilisateur> userOpt = this.utilisateurService.findByEmail(email);
        if (userOpt.isPresent() && userOpt.get().getAdmin()){
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

    public Titre delete(String email, long titreId) {
        Optional<Utilisateur> userOpt = this.utilisateurService.findByEmail(email);
        if (userOpt.isPresent() && userOpt.get().getAdmin()) {
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
