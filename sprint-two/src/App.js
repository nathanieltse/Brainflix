import Nav from './components/Nav/Nav'
import HomePage from './components/HomePage/HomePage'
import UploadPage from './components/UploadPage/UploadPage'
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
          <Route exact path="/" component={HomePage}/>
          <Route path="/upload" component={UploadPage}/>
          <Route path="/:id" component={HomePage}/>
        </Switch>
        
      </main> 
    </BrowserRouter>
  );
}

export default App;
