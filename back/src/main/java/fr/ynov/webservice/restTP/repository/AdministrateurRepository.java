package fr.ynov.webservice.restTP.repository;

import fr.ynov.webservice.restTP.entity.Administrateur;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AdministrateurRepository extends JpaRepository<Administrateur, Long> {

}
