package com.helloworld.jawad.services;

import com.helloworld.jawad.models.Design;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class DesignServiceBean implements DesignService{
    @Override
    public List<Design> findAllDesigns() {
        return null;
    }

    @Override
    public Optional<Design> findOneDesign() {
        return Optional.empty();
    }

    @Override
    public Design createDesign() {
        return null;
    }

    @Override
    public Design updateDesign() {
        return null;
    }

    @Override
    public void deleteDesign(String designId) {

    }
}
