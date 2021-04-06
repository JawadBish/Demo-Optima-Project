package com.helloworld.jawad.repository;

import com.helloworld.jawad.models.CustomerAccount;
import org.springframework.data.repository.CrudRepository;

public interface CustomerAccountRepository extends CrudRepository<CustomerAccount,String> {
}
