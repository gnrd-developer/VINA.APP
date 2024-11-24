package gnrd.myapp4.entities;

import java.util.Date;

import org.hibernate.annotations.GenericGenerator;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@AllArgsConstructor
@NoArgsConstructor
public class Sale {
    @Id
    @GeneratedValue(generator = "UUID")
    @GenericGenerator(name = "UUID", strategy = "org.hibernate.id.UUIDGenerator")
    @Getter @Setter
    private String id;

    @NotNull
    @Getter @Setter
    private Double total;

    @NotNull
    @Getter @Setter
    @Column(columnDefinition = "DATE")
    private Date date;
    
    public Sale(double total, Date date) {
        this.total = total;
        this.date = date;
    }//constructor
    
    
}
