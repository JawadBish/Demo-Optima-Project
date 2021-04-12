import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import MainPage from './components/MainPage';
import CustAccounts from './components/CustAccounts/CustAccounts';
import CustAccountsCreate from './components/CustAccounts/CustAccountsCreate';

function App() {
  return (
<Router>
<Switch>
<Route path='/' exact component={MainPage} />
<Route path='/customer-accounts' exact component={CustAccounts} />
<Route path='/customer-accounts/create' exact component={CustAccountsCreate} />
</Switch>

</Router>
  
  )
}

export default App;
