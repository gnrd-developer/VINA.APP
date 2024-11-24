package gnrd.myapp4.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import gnrd.myapp4.entities.Detail;
import gnrd.myapp4.repositories.DetailRepository;

@Service
@Transactional
public class DetailService {

    private final DetailRepository detailRepository;

    @Autowired
    public DetailService(DetailRepository detailRepository) {
        this.detailRepository = detailRepository;
    }//constructor.


    public void createDetail(Detail detail){
        this.detailRepository.save(detail);
    }

    
    public List<Detail> getDetailBySale(String saleId){
        return this.detailRepository.findBySale_id(saleId);
    }
}
