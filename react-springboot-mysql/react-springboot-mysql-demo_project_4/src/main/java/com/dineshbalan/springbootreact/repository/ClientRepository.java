package com.dineshbalan.springbootreact.repository;

import com.dineshbalan.springbootreact.domain.Client;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ClientRepository extends JpaRepository<Client, Long> {
}
