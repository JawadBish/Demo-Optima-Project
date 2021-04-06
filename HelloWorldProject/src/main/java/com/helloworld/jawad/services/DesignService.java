package com.helloworld.jawad.services;

import com.helloworld.jawad.models.CustomerAccount;
import com.helloworld.jawad.models.Design;

import java.util.List;
import java.util.Optional;

public interface DesignService {


    List<Design> findAllDesigns();

    Optional<Design> findOneDesign();

    Design createDesign();

    Design updateDesign();

    void deleteDesign(String designId);
}
