package fr.ynov.webservice.restTP.controller;

import fr.ynov.webservice.restTP.service.AdministrateurService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(value = "admin")
public class AdministrateurController {

    @Autowired
    AdministrateurService administrateurService;
}
