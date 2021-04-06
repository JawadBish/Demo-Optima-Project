package com.helloworld.jawad.services;

import com.helloworld.jawad.models.CustomerAccount;
import com.helloworld.jawad.models.Design;

import java.util.List;
import java.util.Optional;

public interface DesignService {


    List<Design> findAllDesigns();

    Optional<Design> findOneDesign(String designId);

    Design createDesign(Design design);

    Design updateDesign(Design design,String designId);

    void deleteDesign(String designId);
}
