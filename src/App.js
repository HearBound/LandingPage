import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './Containers/Home/Home.js';
import About from './Containers/About/About';
import Contact from './Containers/Contact/Contact';
import TryFree from './Containers/TryFree/TryFree';
import Carousel from './Components/Carousel/Carousel';

function App() {
  return (
    <BrowserRouter>
      <Switch>
      <Route path='/' component={Home} exact/>
        <Route path='/home' component={Home} exact/>
        <Route path='/about' component={About} exact/>
        <Route path='/contact' component={Contact} exact/>
        <Route path='/new' component={TryFree} exact/>
        <Route path='/carousel' component={Carousel} exact/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
