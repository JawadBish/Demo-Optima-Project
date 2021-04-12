import axios from 'axios';

 import {ENV_URL} from '././GlobalParams';
 const DESIGNS_API_URL = `${ENV_URL}/api/v1/designs`;


class DesignService {

    
      //GET All Designs 
      getAllDesigns() {
        return axios.get(`${DESIGNS_API_URL}`);
    };


    //CREATE Design 
    createDesign(data) {
        return axios.post(`${DESIGNS_API_URL}`, data );
    }

    //GET Design (give Id)
    getDesign(id) {
        return axios.get(`${DESIGNS_API_URL}/${id}`, {
            // headers: authHeader() 
        });
    };


    //UPDATE  Design (given ID and body)
    updateDesign(id,data) {
        return axios.put(`${DESIGNS_API_URL}/${id}`, data , {
            // headers: authHeader()
        });
    };

    //DELETE  Memebr 
    deleteDesign(id) {
    return axios.delete(`${DESIGNS_API_URL}/${id}`, {
        // headers: authHeader()
    });
};

}

export default new DesignService();