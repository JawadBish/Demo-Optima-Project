package com.helloworld.jawad.services;


import com.helloworld.jawad.models.CustomerAccount;
import com.helloworld.jawad.repository.CustomerAccountRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class CustomerAccountServiceBean implements CustomerAccountService {

    @Autowired
    private CustomerAccountRepository customerAccountRepository;


    public CustomerAccountServiceBean(){}

    @Override
    public List<CustomerAccount> findAllCustAccounts() {
        List<CustomerAccount> custAccounts = new ArrayList<>();
        customerAccountRepository.findAll().forEach(custAccounts::add);
        return custAccounts;
    }

    @Override
    public Optional<CustomerAccount> findOneCustAccount(String custAccountId) {
        return customerAccountRepository.findById(custAccountId);
    }

    @Override
    public CustomerAccount createCustAccount(CustomerAccount customerAccount) {
        return customerAccountRepository.save(customerAccount);
    }

    @Override
    public CustomerAccount updateCustAccount(CustomerAccount customerAccount, String custAccountId) {
        Optional<CustomerAccount> searchCustAccount = customerAccountRepository.findById(custAccountId);
        if(searchCustAccount.isPresent()) {
            CustomerAccount customerAccountInstance = searchCustAccount.get();

            if(customerAccount.getName() != null ) {
                customerAccountInstance.setName(customerAccount.getName());
            }
          return customerAccountRepository.save(customerAccountInstance);

        } else {
            throw new RuntimeException("Custmer Account Not Found!");
        }

    }

    @Override
    public void deleteCustAccount(String custAccountId) {
        Optional<CustomerAccount> searchCustAccount = findOneCustAccount(custAccountId);
        if (!searchCustAccount.isPresent()) {
            throw new RuntimeException("Custmer Account Not Found!");
        }
        customerAccountRepository.deleteById(custAccountId);
    }
}
