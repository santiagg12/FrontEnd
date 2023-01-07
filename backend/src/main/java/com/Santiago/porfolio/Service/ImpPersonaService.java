
package com.Santiago.porfolio.Service;

import com.Santiago.porfolio.Entity.Persona;
import com.Santiago.porfolio.Interface.IPersonaService;
import com.Santiago.porfolio.Repository.IPersonaRepository;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ImpPersonaService implements IPersonaService{
@Autowired IPersonaRepository ipersonaRepository;
    @Override
    public List<Persona> getPersona() {
    List<Persona> persona = ipersonaRepository.findAll();
    return persona;
    }

    @Override
    public void savePersona(Persona persona) {
        ipersonaRepository.save(persona);
    }

    @Override
    public void deletePersona(Long Id) {
        ipersonaRepository.deleteAllById(Id);
    }

    @Override
    public Persona findPersona(Long Id) {
        Persona persona = ipersonaRepository.findById(Id).orElse(null); 
        return persona;
        
            }
    
}
