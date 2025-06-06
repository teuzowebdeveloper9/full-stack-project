package backend_dev.backend.DTOS;

import backend_dev.backend.entitys.FoodEntity;

import java.util.UUID;

public record FoodDTO(UUID id, String food, String imageURL, Integer price) {

    public FoodDTO (FoodEntity food){
        this(food.getId(), food.getFood(), food.getImageURL(), food.getPrice());
    }
}
