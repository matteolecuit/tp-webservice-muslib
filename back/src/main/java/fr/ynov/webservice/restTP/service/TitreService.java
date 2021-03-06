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
     
    public List<Titre> findAll(){
        List<Titre> titres = this.titreRepository.findAll();

        return titres;
    }

    public Titre findById(long id){
        Optional<Titre> titreOpt = this.titreRepository.findById(id);
        return titreOpt.orElse(null);
    }

    public Titre findByIdAndIsLiked(String email, long id){
        Titre titre = findById(id);
        if (titre != null){

            Optional<Utilisateur> userOpt = this.utilisateurService.findByEmail(email);
            if (userOpt.isPresent()){

                List<Titre> likedTitre = userOpt.get().getTitres();
                if (likedTitre.contains(titre)) {
                    titre.setLike(true);
                }

            }

            return titre;
        }
        return null;
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
            System.out.println("user ok");
            Optional<Titre> titreOpt = this.titreRepository.findById(titreId);
            if (titreOpt.isPresent()) {
                System.out.println("titre ok");
                for (Utilisateur user : this.utilisateurService.findAll()) {
                    user.getTitres().remove(titreOpt.get());
                    //this.utilisateurService.save(user);
                }
                System.out.println(utilisateurService.findAll().size());
                System.out.println("users favourite deleted");
                this.titreRepository.delete(titreOpt.get());
                System.out.println("return");
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
