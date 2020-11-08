package fr.ynov.webservice.restTP.service;

import fr.ynov.webservice.restTP.repository.AlbumRepository;
import fr.ynov.webservice.restTP.repository.ArtisteRepository;
import org.springframework.beans.factory.annotation.Autowired;

public class AlbumService {

    @Autowired
    AlbumRepository albumRepository;

}
