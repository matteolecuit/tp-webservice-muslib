package fr.ynov.webservice.restTP.repository;

import fr.ynov.webservice.restTP.entity.Album;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AlbumRepository extends JpaRepository<Album, Long> {
}
