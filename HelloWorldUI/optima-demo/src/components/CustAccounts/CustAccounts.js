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
                console.log("ACC",accounts)
                this.setState({ accounts });
            })
    }


      
 

    render() {
        const goToBack = () => {
            window.location = '/';
        }

        const createAccount = () => {
            window.location = '/customer-accounts/create';
          }


        return (
        
            <div className="container-page-full">
                <div className="container-view-contents-boxes">
            {this.state.accounts.map(account => (
                 <div className="box-of-content" key={account.id}>
                     <h1>{account.name}</h1>
                     <p>{account.logo}</p>
                   </div>   
            ))}
                  </div>
                  <div className="button-wrapper">
                  <button className="default-button" onClick={createAccount}> Register Now!</button>        
                  <button className="default-button" onClick={goToBack}> Home Page!</button>        
                  </div>
                                    </div>
        )
        
    }
}
