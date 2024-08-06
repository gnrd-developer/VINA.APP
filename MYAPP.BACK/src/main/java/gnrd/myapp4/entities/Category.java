package gnrd.myapp4.entities;

import org.hibernate.annotations.GenericGenerator;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@AllArgsConstructor
@NoArgsConstructor
public class Category {
    @Id
    @GeneratedValue(generator = "UUID")
    @GenericGenerator(name="UUID",
    strategy = "org.hibernate.id.UUIDGenerator")
    @Getter @Setter
    private String id;

    @NotBlank @NotNull
    @Getter @Setter
    private String name;

    @NotBlank @NotNull
    @Getter @Setter
    private String image;
}
