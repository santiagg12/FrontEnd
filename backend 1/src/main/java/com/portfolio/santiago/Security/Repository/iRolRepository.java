/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Interface.java to edit this template
 */
package com.portfolio.santiago.Security.Repository;

import com.portfolio.santiago.Security.Entity.Rol;
import com.portfolio.santiago.Security.Enums.RolNombre;
import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

/**
 *
 * @author micae
 */@Repository
public interface iRolRepository extends JpaRepository<Rol, Integer>{
    Optional<Rol> findByRolNombre(RolNombre rolNombre);
}
