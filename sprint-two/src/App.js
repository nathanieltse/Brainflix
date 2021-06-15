import Nav from './components/Nav/Nav'
import Home from './components/Home/Home'
import Upload from './components/Upload/Upload'
import {BrowserRouter, Route, Switch} from 'react-router-dom'

import './App.scss'

function App() {
  return (
    <BrowserRouter>
      <header className="header">
        <Nav/>
      </header>
      <main className="main">
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/upload" component={Upload}/>
          <Route path="/:id" component={Home}/>
        </Switch>
        
      </main> 
    </BrowserRouter>
  );
}

export default App;
