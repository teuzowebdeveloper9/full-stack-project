package backend_dev.backend.repositories;

import backend_dev.backend.entitys.FoodEntity;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.UUID;

public interface FoodRepository extends JpaRepository <FoodEntity, UUID> {

}
