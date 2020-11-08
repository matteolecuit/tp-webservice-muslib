package fr.ynov.webservice.restTP.service;

import fr.ynov.webservice.restTP.repository.PlaylistRepository;
import fr.ynov.webservice.restTP.repository.TitreRepository;
import org.springframework.beans.factory.annotation.Autowired;

public class PlaylistService {

    @Autowired
    PlaylistRepository playlistRepository;
}
