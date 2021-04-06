package com.helloworld.jawad.services;

import com.helloworld.jawad.models.CustomerAccount;
import com.helloworld.jawad.models.Design;
import com.helloworld.jawad.repository.DesignRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import sun.security.krb5.internal.crypto.Des;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class DesignServiceBean implements DesignService{



    @Autowired
    private DesignRepository designRepository;

    @Override
    public List<Design> findAllDesigns() {
        List<Design> designList = new ArrayList<>();
        designRepository.findAll().forEach(designList::add);
        return designList;
    }

    @Override
    public Optional<Design> findOneDesign(String designId) {
        return designRepository.findById(designId);
    }

    @Override
    public Design createDesign(Design design) {
        return designRepository.save(design);
    }

    @Override
    public Design updateDesign(Design design,String designId) {
        Optional<Design> searchDesign = designRepository.findById(designId);
        if(searchDesign.isPresent()) {
            Design designInstance = searchDesign.get();

            if(design.getBackgroundColor() != null ) {
                designInstance.setBackgroundColor(design.getBackgroundColor());
            }
           return designRepository.save(designInstance);
        } else {
            throw new RuntimeException("Design not found!");
        }

    }

    @Override
    public void deleteDesign(String designId) {
        Optional<Design> searchDesign = designRepository.findById(designId);
        if(!searchDesign.isPresent()) {
            throw new RuntimeException("Design not found!");
        } else {
            designRepository.deleteById(designId);
        }
    }
}
