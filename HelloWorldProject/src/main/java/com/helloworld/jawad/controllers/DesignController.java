package com.helloworld.jawad.controllers;


import com.helloworld.jawad.models.Design;
import com.helloworld.jawad.services.DesignService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@CrossOrigin( origins = "*")
@RestController
@RequestMapping("api/v1/designs")
public class DesignController {

    @Autowired
    private DesignService designService;


    @GetMapping
    public List<Design> getAllDesigns() {
        return designService.findAllDesigns();
    }

    @GetMapping(path = "/{designId}")
    public Optional<Design> getDesign(@PathVariable String designId) {
        return designService.findOneDesign(designId);
    }

    @PostMapping
    public Design createDesign(@RequestBody Design design) {
        return designService.createDesign(design);
    }

    @PutMapping(path = "/{designId}")
    public Design updateDesign(@RequestBody Design design, @PathVariable String designId) {
        return designService.updateDesign(design,designId);
    }

    @DeleteMapping(path = "/{designId}")
    public void deleteDesign(@PathVariable String designId) {
        designService.deleteDesign(designId);
    }
}
