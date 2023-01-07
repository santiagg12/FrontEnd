package com.Santiago.porfolio.Repository;

import com.Santiago.porfolio.Entity.Persona;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository

public interface IPersonaRepository extends JpaRepository<Persona,Long>{

    public void deleteAllById(Long Id);
    
    
}
