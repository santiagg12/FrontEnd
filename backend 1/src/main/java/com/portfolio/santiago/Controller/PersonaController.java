/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.portfolio.santiago.Controller;

import com.portfolio.santiago.Entity.Persona;
import com.portfolio.santiago.Interface.IPersonaService;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

/**
 *
 * @author micae
 */
@RestController

@CrossOrigin(origins ="http://localhost:4200")
public class PersonaController {
    @Autowired IPersonaService ipersonaService ;
    
    @GetMapping("personas/traer")
    public List<Persona> getPersona(){
        return ipersonaService.getPersona();
        
    }
    @PreAuthorize("hasRole('ADMIN')")
    @PostMapping("/personas/crear")   
    public String createPersona(@RequestBody Persona persona){
        ipersonaService.savePersona(persona);
        return "Persona creada correctamente";
    }
    @PreAuthorize("hasRole('ADMIN')")
    @DeleteMapping("/personas/borrar/{id}")
    public String deletePersona (@PathVariable Long id){
        ipersonaService.deletePersona(id);
        return "Persona eliminada correctamente";
    }
    @PreAuthorize("hasRole('ADMIN')")
    @PutMapping("/personas/editar/{id}")
    public Persona editPersona(@PathVariable Long id,
            @RequestParam("nombre")String nuevoNombre,
            @RequestParam("img")String nuevoImg,
             @RequestParam("apellido")String nuevoApellido)
             {
Persona persona = ipersonaService.findPersona(id);
persona.setNombre(nuevoNombre);
persona.setImg(nuevoImg);
persona.setApellido(nuevoApellido);


ipersonaService.savePersona(persona);
return persona;
}
    @GetMapping("/personas/traer/perfil")
    public Persona findPersona(){
        return ipersonaService.findPersona((long)1);
    }
}