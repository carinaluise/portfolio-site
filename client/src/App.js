import './App.scss';

import Navbar from './components/nav-bar/nav-bar';
import Home from './components/home/home';
import Portfolio from './components/portfolio/portfolio';
import Tech from './components/tech/tech';
import Tech2 from './components/tech2/tech2';
import Contact from './components/contact/contact';
import Space from './components/space/space';



function App() {
  return (
    <div className="App">
       <Navbar></Navbar>
       <Home></Home>
       <Space first></Space>
       <Portfolio></Portfolio>
       <Space second></Space>
       <Tech></Tech>
       <Space third></Space>
       <Contact></Contact>
    </div>
  );
}

export default App;
