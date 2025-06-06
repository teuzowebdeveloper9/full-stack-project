package backend_dev.backend.Controllers;

import backend_dev.backend.DTOS.FoodDTO;
import backend_dev.backend.DTOS.FoodRequestDTO;
import backend_dev.backend.entitys.FoodEntity;
import backend_dev.backend.repositories.FoodRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/menu")
public class foodController {
     @Autowired
    private FoodRepository repository;

     @CrossOrigin(origins =  "*", allowedHeaders = "*")
    @PostMapping("/")
    public  void saveFood(@RequestBody FoodRequestDTO data){
        FoodEntity foodData = new FoodEntity(data);

        repository.save(foodData);

        return;
    }


    @GetMapping("/")
    public List<FoodDTO> getAll(){

        List<FoodDTO> foodList = repository.findAll()
                .stream()
                .map(FoodDTO:: new )
                .collect(Collectors.toList());;

        return foodList;
    }
}
