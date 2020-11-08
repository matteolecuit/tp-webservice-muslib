package fr.ynov.webservice.restTP.service;

import fr.ynov.webservice.restTP.repository.UtilisateurRepository;
import org.springframework.beans.factory.annotation.Autowired;

public class UtilisateurService {

    @Autowired
    UtilisateurRepository utilisateurRepository;
}
