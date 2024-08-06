package gnrd.myapp4.services;

import java.util.List;
import java.util.Optional;

import com.fasterxml.jackson.core.JsonProcessingException;

import gnrd.myapp4.entities.Product;

public interface IProductService {
    void saveProduct(Product product);
    List<Product> getAllProducts();
    List<Product> getRelatedProducts(String category, 
    String id);
    Optional<Product> getProductById(String id);
    Product convertJsonToProduct(String stringProduct)
    throws JsonProcessingException;
}
