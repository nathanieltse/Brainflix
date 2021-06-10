import Nav from './components/Nav/Nav'
import Main from './components/Main/Main'

import './App.scss'




function App() {
  return (
    <>
      <header className="header">
        <Nav/>
      </header>
      <main className="main">
        <Main/>
      </main>
    </>
  );
}

export default App;
