package gnrd.myapp4.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import gnrd.myapp4.entities.Detail;

public interface 
DetailRepository extends JpaRepository<Detail,String>{

    List<Detail> findBySale_id(String saleId);
    
}
