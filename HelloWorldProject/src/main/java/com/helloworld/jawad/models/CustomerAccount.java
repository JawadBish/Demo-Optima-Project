package com.helloworld.jawad.models;


import org.hibernate.annotations.GenericGenerator;

import javax.persistence.*;

@Entity
@Table(name = "CUSTOMER_ACCOUNT")
public class CustomerAccount {

    @Id
    @GeneratedValue(generator = "uuid")
    @GenericGenerator(name = "uuid", strategy = "uuid2")
    protected String id;
    @Column
    protected String name;
    @OneToOne(cascade = CascadeType.ALL, orphanRemoval = true)
    protected Design customizedDesign;


    public CustomerAccount(String id, String name, Design customizedDesign) {
        this.id = id;
        this.name = name;
        this.customizedDesign = customizedDesign;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Design getCustomizedDesign() {
        return customizedDesign;
    }

    public void setCustomizedDesign(Design customizedDesign) {
        this.customizedDesign = customizedDesign;
    }
}
