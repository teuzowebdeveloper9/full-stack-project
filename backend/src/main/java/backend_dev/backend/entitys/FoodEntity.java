package backend_dev.backend.entitys;


import backend_dev.backend.DTOS.FoodRequestDTO;
import jakarta.persistence.*;
import lombok.*;

import java.util.UUID;

@Entity
@Table(name = "foods")
@NoArgsConstructor
@AllArgsConstructor
@EqualsAndHashCode(of = "id")
public class FoodEntity {


    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private UUID id;
    private  String food;
    private String imageURL;
    private Integer price;


    public  FoodEntity(FoodRequestDTO data){
        this.imageURL = data.imageURL();
        this.price = data.price();
        this.food = data.food();

    }

    public UUID getId() {
        return id;
    }

    public void setId(UUID id) {
        this.id = id;
    }

    public String getFood() {
        return food;
    }

    public void setFood(String food) {
        this.food = food;
    }

    public String getImageURL() {
        return imageURL;
    }

    public void setImageURL(String imageURL) {
        this.imageURL = imageURL;
    }

    public Integer getPrice() {
        return price;
    }

    public void setPrice(Integer price) {
        this.price = price;
    }
}
