package com.helloworld.jawad.controllers;

import com.helloworld.jawad.models.CustomerAccount;
import com.helloworld.jawad.services.CustomerAccountService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;



@CrossOrigin( origins = "*")
@RestController
@RequestMapping("api/v1/custaccounts")
public class CustAccountController {

    @Autowired
    private CustomerAccountService customerAccountService;


    @GetMapping
    public List<CustomerAccount> getAllCustAccounts() {
        return customerAccountService.findAllCustAccounts();
    }

    @GetMapping(path = "/{custId}")
    public Optional<CustomerAccount> getCustAccount(@PathVariable String custId) {
        return customerAccountService.findOneCustAccount(custId);
    }

    @PostMapping
    public CustomerAccount createCustAccount(@RequestBody CustomerAccount customerAccount) {
        return customerAccountService.createCustAccount(customerAccount);
    }

    @PutMapping(path = "/{custId}")
    public CustomerAccount updateCustAccount(@RequestBody CustomerAccount customerAccount, @PathVariable String custId) {
        return customerAccountService.updateCustAccount(customerAccount,custId);
    }

    @DeleteMapping(path = "/{custId}")
    public void deleteCustAccount(@PathVariable String custId) {
        customerAccountService.deleteCustAccount(custId);
    }

}
