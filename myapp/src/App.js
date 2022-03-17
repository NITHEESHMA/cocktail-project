
import './App.css';
import Home from './pages/Home';
import {Switch,Route} from 'react-router-dom'
import Header from './component/Header';
import Singlecock from './pages/Singlecock';
//import Search from './component/Search';
function App() {
  return (
    <div className="App">
   
  <Header/>
<Switch>
<Route exact path='/' component={Home}/>
<Route exact path='/cocktail/:id' component={Singlecock}/>
    
    </Switch>

    <Home/>
    </div>
  );
}

export default App;
