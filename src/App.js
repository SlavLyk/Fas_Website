import Header from './components/Header/Header'
import Home from './components/Home/Home'
import About from './components/About/About'
import Games from './components/Games/Games'
import Contact from './components/Contact/Contact'


function App() {
  return (
    <div className="App">
      <Header/>
      <Home/>
      <About/>
      <Games/>
      <Contact/>
    </div>
  );
}

export default App;
