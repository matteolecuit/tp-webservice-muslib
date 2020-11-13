package fr.ynov.webservice.restTP.service;

import fr.ynov.webservice.restTP.repository.AdministrateurRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class AdministrateurService {

    @Autowired
    AdministrateurRepository administrateurRepository;
}
