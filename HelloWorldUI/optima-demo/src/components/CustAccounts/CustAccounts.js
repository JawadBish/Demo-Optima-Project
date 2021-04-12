import React, { Component } from 'react'
import '../../App.css';
import CustAccountService from '../../services/CustAccountService';


export default class CustAccounts extends Component {
    state = {
        accounts: []
    }
  
    componentDidMount() {
        this.refreshAccounts();
    }

    refreshAccounts = () => {
        CustAccountService.getAllAccounts()
            .then(res => {
                const accounts = res.data;
                this.setState({ accounts });
            })
    }

 
      
 

    render() {
        return (
        
            <div className="container-page-full">
                <div className="container-view-contents">
            {this.state.accounts.map(account => (
                 <div className="list-wrap-contents">
                     <h1>{account.name}</h1>
                   </div>   
            ))}
                   
                     
                 
                  </div>
                  </div>
        )
        
    }
}
