package backend_dev.backend.Controllers;

import backend_dev.backend.entitys.FoodEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/menu")
public class foodController {

    @GetMapping("/")
    public void getAll(){

        FoodEntity food ;

    }
}
