import React, { Component } from 'react'
import CustAccountService from '../../services/CustAccountService';

export default class CustAccountDetails extends Component {
    state = {
        oneAccount: []
    }

    componentDidMount() {
        const { match: { params } } = this.props;
        const accountID = params.id;
        CustAccountService.getAccount(accountID)
            .then(res => {
                const oneAccount = res.data;
                this.setState({ oneAccount });
            })
    }


    

    render() {
        const goToBack = () => {
            window.location = '/customer-accounts';
        }
        return (
            <div className="top-level-page-main">
                <div className="view-details">
                    <div className="account-details">
                      
                        <div className="card-group-field">
                            <h2>  Account Name:  </h2>
                            <h3> {this.state.oneAccount.name}   </h3>
                        </div>

                        <div className="card-group-field">
                            <h2>  Account Logo:  </h2>
                            <h3> {this.state.oneAccount.logo}   </h3>
                        </div>
                        <button className="default-button" onClick={goToBack}> Go Back!</button>   
                   
               </div>
                </div>
            </div>
        )
    }
}
