import axios from 'axios';

 import {ENV_URL} from '././GlobalParams';
 const ACCOUNTS_API_URL = `${ENV_URL}/api/v1/custaccounts`;


class CustAccountService {

      //GET All ACCOUNTS 
      getAllAccounts() {
        return axios.get(`${ACCOUNTS_API_URL}`);
    };


    //CREATE Account 
    createAccount(data) {
        return axios.post(`${ACCOUNTS_API_URL}`, data );
    }

    //GET Account (give Id)
    getAccount(id) {
        return axios.get(`${ACCOUNTS_API_URL}/${id}`, {
            // headers: authHeader() 
        });
    };


    //UPDATE  Account (given ID and body)
    updateAccount(id,data) {
        return axios.put(`${ACCOUNTS_API_URL}/${id}`, data , {
            // headers: authHeader()
        });
    };

    //DELETE  Memebr 
    deleteAccount(id) {
    return axios.delete(`${ACCOUNTS_API_URL}/${id}`, {
        // headers: authHeader()
    });
};


}

export default new CustAccountService();