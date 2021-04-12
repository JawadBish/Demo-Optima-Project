import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import MainPage from './components/MainPage';
import CustAccounts from './components/CustAccounts/CustAccounts';
import CustAccountsCreate from './components/CustAccounts/CustAccountsCreate';
import CustAccountDetails from './components/CustAccounts/CustAccountDetails';

function App() {
  return (
<Router>
<Switch>
<Route path='/' exact component={MainPage} />
<Route path='/customer-accounts' exact component={CustAccounts} />
<Route path='/customer-accounts/create' exact component={CustAccountsCreate} />
<Route path='/customer-accounts/:id' exact component={CustAccountDetails} />
</Switch>

</Router>
  
  )
}

export default App;
