package fr.ynov.webservice.restTP.service;

import fr.ynov.webservice.restTP.model.Utilisateur;
import fr.ynov.webservice.restTP.repository.UtilisateurRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class UtilisateurService {

    @Autowired
    UtilisateurRepository utilisateurRepository;

    public Utilisateur add(Utilisateur utilisateur){
        return this.utilisateurRepository.save(utilisateur);
    }

    public Optional<Utilisateur> findById(long id){
        return this.utilisateurRepository.findById(id);
    }

    public List<Utilisateur> getRandom(int numberOfRandom){

        List<Utilisateur> randUtilisateur = new ArrayList<>();

        List<Utilisateur> allUtilisateur = utilisateurRepository.findAll();

        for (int i = 0; i < numberOfRandom; i++){
            int idx = (int)(Math.random() * (allUtilisateur.size()-1));
            if (idx < allUtilisateur.size()){
                randUtilisateur.add(allUtilisateur.get(idx));
                allUtilisateur.remove(allUtilisateur.get(idx));
            }
        }

        return randUtilisateur;
    }
}
