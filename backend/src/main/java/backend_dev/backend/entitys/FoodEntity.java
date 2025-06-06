package backend_dev.backend.entitys;


import jakarta.persistence.*;

import java.util.UUID;

@Entity
@Table(name = "foods")
public class FoodEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private UUID id;
    private  String food;
    private String imageURL;
    private Integer price;

}
