package backend_dev.backend.DTOS;

import org.antlr.v4.runtime.misc.NotNull;

public record FoodRequestDTO(
        @NotNull
        String food,
        @NotNull
        String imageURL,
        Integer price
) {

}
