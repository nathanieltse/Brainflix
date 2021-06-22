import PageNav from './components/PageNav/PageNav'
import HomePage from './pages/HomePage/HomePage'
import UploadPage from './pages/UploadPage/UploadPage'
import {BrowserRouter, Route, Switch} from 'react-router-dom'

import './App.scss'

function App() {
  return (
    <BrowserRouter>
      <header className="header">
        <PageNav/>
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
