/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.portfolio.santiago.Interface;

import com.portfolio.santiago.Entity.Persona;
import java.util.List;

/**
 *
 * @author micae
 */public interface IPersonaService {
    //Traer lista de personas
    public List<Persona> getPersona();
    
    //Guardar objeto de tipo Persona
    public void savePersona(Persona persona);
    
    //Eliminar objeto pero lo buscamos por ID
    public void deletePersona(Long id);
    
    //Buscar persona por ID
    public Persona findPersona (Long id);
}