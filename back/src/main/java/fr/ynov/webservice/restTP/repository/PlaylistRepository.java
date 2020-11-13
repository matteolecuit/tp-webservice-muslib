package fr.ynov.webservice.restTP.repository;

import fr.ynov.webservice.restTP.model.Playlist;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PlaylistRepository extends JpaRepository<Playlist, Long> {
}
