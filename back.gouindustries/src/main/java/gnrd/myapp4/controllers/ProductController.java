package gnrd.myapp4.controllers;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestPart;
import org.springframework.web.bind.annotation.RestController;

import gnrd.myapp4.entities.Message;
import gnrd.myapp4.entities.Product;
import gnrd.myapp4.services.IProductService;
import gnrd.myapp4.services.ProductService;
import jakarta.validation.Valid;

@RestController
@RequestMapping("/product")
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class ProductController {
    
    @Autowired
    private IProductService iProductService;

    @Autowired
    private ProductService productService;

    @Autowired
    public ProductController(IProductService iProductService){
        this.iProductService = iProductService;
    }

    @GetMapping("/{id}")
    public ResponseEntity<Object> getProductById
    (@PathVariable("id")String id){
        Optional<Product> productOptional = 
        this.iProductService.getProductById(id);
        if (productOptional.isEmpty())
        return new ResponseEntity<>
        (new Message("No Encontrado"),
        HttpStatus.NOT_FOUND);
        return new ResponseEntity<>(productOptional.get(),
        HttpStatus.OK);
    }

    @GetMapping("/all")
    public ResponseEntity<Object> getAllProducts(){
        return new ResponseEntity<>
        (this.iProductService.getAllProducts(),HttpStatus.OK);
    }

    @GetMapping("/related/{category}/{id}")
    public ResponseEntity<Object> getRelatedProducts
    (@PathVariable("category")String category,
    @PathVariable("id")String id){
        return new ResponseEntity<>
        (this.iProductService.getRelatedProducts
        (category, id), HttpStatus.OK);
    }

    @PostMapping(consumes = 
    { MediaType.APPLICATION_JSON_VALUE})
    public ResponseEntity<Message> createProduct
    (@Valid @RequestPart("product") String stringProduct,
    BindingResult bindingResult){
        try {
            Product product = iProductService
            .convertJsonToProduct(stringProduct);
            this.iProductService.saveProduct(product);
            return new ResponseEntity<>
            (new Message("actualizado"),
            HttpStatus.OK);            
        } catch (Exception e) {
            return new ResponseEntity<>(new Message
            ("revise los campos"),
            HttpStatus.BAD_REQUEST);
        }
    }

    @GetMapping("/subcategory/{sub}")
    public ResponseEntity<Object> getSubCategory
    (@PathVariable("sub")String sub){
        return new ResponseEntity<>
        (this.productService.getAllProductsBySubCategoryName
        (sub), HttpStatus.OK);
    }

    

}
