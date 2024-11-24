package gnrd.myapp4.entities;

import org.hibernate.annotations.GenericGenerator;
//import org.hibernate.annotations.ManyToAny;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.Lob;
import jakarta.persistence.ManyToOne;
import jakarta.validation.constraints.DecimalMin;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@AllArgsConstructor
@NoArgsConstructor
public class Product {
    @Id
    @GeneratedValue(generator="UUID")
    @GenericGenerator(name = "UUID",
    strategy = "org.hibernate.id.UUIDGenerator")//GENERA UN ID DE FORMA AUTOMATICA(GENERADOR NAME:UUID)
    @Getter @Setter
    private String id;

    @NotBlank @NotNull
    @Getter @Setter
    private String name;

    @Getter @Setter
    @ManyToOne(optional = false,
    cascade = CascadeType.DETACH,
    fetch = FetchType.EAGER)
    private SubCategory subCategory;

    @NotBlank @NotNull
    @Getter @Setter
    @Lob
    private String description;

    @NotBlank @NotNull
    @Getter @Setter
    private String image;

    @NotBlank @NotNull
    @Getter @Setter
    private String img2;

    @NotBlank @NotNull
    @Getter @Setter
    private String img3;    

    @NotBlank @NotNull
    @Getter @Setter
    private String img4;

    @NotNull @DecimalMin(value = "0.1")
    @Getter @Setter
    private Double price;

}
