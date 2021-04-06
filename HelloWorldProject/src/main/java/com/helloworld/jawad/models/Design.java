package com.helloworld.jawad.models;


import org.hibernate.annotations.GenericGenerator;

import javax.persistence.*;

@Entity
@Table(name = "DESIGN")
public class Design {

    @Id
    @GeneratedValue(generator = "uuid")
    @GenericGenerator(name = "uuid", strategy = "uuid2")
    protected String id;

    @Column
    protected String backgroundColor;

    @OneToOne(targetEntity = CustomerAccount.class, fetch = FetchType.EAGER)
    protected CustomerAccount account;

    public Design(String id, String backgroundColor, CustomerAccount account) {
        this.id = id;
        this.backgroundColor = backgroundColor;
        this.account = account;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getBackgroundColor() {
        return backgroundColor;
    }

    public void setBackgroundColor(String backgroundColor) {
        this.backgroundColor = backgroundColor;
    }

    public CustomerAccount getAccount() {
        return account;
    }

    public void setAccount(CustomerAccount account) {
        this.account = account;
    }
}
