/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.portfolio.santiago.Service;

import com.portfolio.santiago.Entity.Persona;
import com.portfolio.santiago.Interface.IPersonaService;
import com.portfolio.santiago.Repository.IPersonaRepository;
import java.util.List;
import javax.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 *
 * @author micae
 */
@Service
@Transactional
public class ImpPersonaService  implements IPersonaService{

    @Autowired IPersonaRepository ipersonaRepository;

    @Override
    public List<Persona> getPersona() {
List <Persona> persona = ipersonaRepository.findAll();
    return persona;}

    @Override
    public void savePersona(Persona persona) {
    ipersonaRepository.save(persona);}

    @Override
    public void deletePersona(Long id) {
    ipersonaRepository.deleteById(id);}

    @Override
    public Persona findPersona(Long id) {
Persona persona = ipersonaRepository.findById(id).orElse (null); 
   return persona; }}
