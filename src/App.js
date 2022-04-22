import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';

//page comonents
import Home from './pages/home/Home'
import Login from './pages/login/Login'
import Signup from './pages/signup/Signup'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar />
        <switch>
          <Route exact path ="/">
            <Home />
          </Route>
          <Route path ="/Login">
            <Login />
          </Route>
          <Route path ="/Signup">
            <Signup />
          </Route>
        </switch>
      </BrowserRouter>
    </div>
  );
}

export default App
