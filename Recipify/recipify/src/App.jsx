import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import SearchBar from './SearchBar.jsx';
import Body from './body.jsx';
import Footer from './Footer.jsx';
import Nav from './Nav.jsx';


function App() {
  return (
    <><Nav /><main>
      <Body />
    </main><footer>
        <Footer />
      </footer></>
  );
}

export default App;
