package fr.ynov.webservice.restTP.service;

import fr.ynov.webservice.restTP.repository.AdministrateurRepository;
import fr.ynov.webservice.restTP.repository.AlbumRepository;
import org.springframework.beans.factory.annotation.Autowired;

public class AdministrateurService {

    @Autowired
    AdministrateurRepository administrateurRepository;
}
