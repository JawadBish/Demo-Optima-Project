import React, { Component } from 'react'


import CustAccountService from '../../services/CustAccountService';


export default class CustAccountsCreate extends Component {
    constructor() {
        super()
        this.state = {
            "name": "",
            "logo": "",
            successful: false,
            message: "",
            errors: {}
        };

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }


    createAccount(accountData) {
        CustAccountService.createAccount(accountData)
            .then((response) => {
                this.setState({
                    message: response.data.message,
                    successful: true
                });
                window.open('/customer-accounts', "_self");
            },
                error => {
                    const resMessage =
                        (error.response &&
                            error.response.data &&
                            error.response.data.message) ||
                        error.message ||
                        error.toString();

                    this.setState({
                        successful: false,
                        message: resMessage
                    });
                }
            );
    }




    onChange(event) {
        //that means that every event.target. name (the name in the elements) to assign the value to it. 
        this.setState({ [event.target.name]: event.target.value })
    }

    onSubmit(event) {
        event.preventDefault()
        const newCust = {
            name: this.state.name,
            logo: this.state.logo
        };
        this.createAccount(newCust);
    }



    render() {

        const goToBack = () => {
            window.location = '/';
        }

        return (
            <div className="mainCreate">
                <div className="top-container-forms">
                    <div className="create-form">

                        <h1>Create New Account</h1>

                        <form onSubmit={this.onSubmit}>
                            <div className="form-group-create">
                                <h5> Account Name </h5>
                                <input
                                    type="text"
                                    name="name" placeholder="Name"
                                    value={this.state.name}
                                    onChange={this.onChange}
                                />

                            
                                    <h5> Company Logo </h5>
                                    <input
                                        type="text"
                                        name="logo" placeholder="Logo"
                                        value={this.state.logo}
                                        onChange={this.onChange}
                                    />
               
                                </div>

                                {/* <button className="btn" onClick={this.props.history.goBack}> للعودة  </button> <br></br> */}
                                <br></br>
                                <input type="submit" value="Submit" className="default-button" />
                                <button className="default-button" onClick={goToBack}> Home Page!</button>        
                                {this.state.message && (
                                    <div className="form-group">
                                        <div
                                            className={
                                                this.state.successful
                                                    ? "alertSuccess"
                                                    : "alertDanger"
                                            }
                                            role="alert"
                                        >
                                            {this.state.message}
                                        </div>
                                    </div>
                                )}

                        </form>

                    </div>

                    </div></div>


        )
    }
}
