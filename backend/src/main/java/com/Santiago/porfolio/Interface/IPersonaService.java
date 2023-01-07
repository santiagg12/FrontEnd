package com.Santiago.porfolio.Interface;

import com.Santiago.porfolio.Entity.Persona;
import java.util.List;


public interface IPersonaService {
 //para traer lista de personas
    public List<Persona> getPersona();
    //para guardar un objeto del tipo persona
    public void savePersona(Persona persona);
    //eliminat usuario
    public void deletePersona(Long Id);
    //buscar persona por id
    public Persona findPersona(Long Id)
;}
