package com.helloworld.jawad.services;

import com.helloworld.jawad.models.CustomerAccount;

import java.util.List;
import java.util.Optional;

public interface CustomerAccountService {

    List<CustomerAccount> findAllCustAccounts();

    Optional<CustomerAccount> findOneCustAccount(String custAccountId);

    CustomerAccount createCustAccount(CustomerAccount customerAccount);

    CustomerAccount updateCustAccount(CustomerAccount customerAccount, String custAccountId);

    void deleteCustAccount(String custAccountId);

}
