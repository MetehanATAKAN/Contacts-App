import './App.css';
import Contacts from './components/contacts';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Edit from './components/contacts/Edit';

function App() {
  return (
    <div className="App">
      <div className="contacts-main">
        <Router>
          <Switch>
            <Route exact path="/" component={Contacts} />
            <Route path="/edit/:id" component={Edit} />
          </Switch>
        </Router>
      </div>
    </div>
  );
}

export default App;
