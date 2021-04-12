import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import MainPage from './components/MainPage';
import CustAccounts from './components/CustAccounts/CustAccounts';

function App() {
  return (
<Router>
<Switch>
<Route path='/' exact component={MainPage} />
<Route path='/customer-accounts' exact component={CustAccounts} />
</Switch>

</Router>
  
  )
}

export default App;
