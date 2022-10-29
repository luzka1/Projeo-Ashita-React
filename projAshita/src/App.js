import login from './img/login.svg';
import './css/App.css';
import Slider_princ from './component/Slider_princ';
import Box_cont1 from './component/Box_cont1';
import Box_cont2 from './component/Box_cont2';
import Box_cont3 from './component/Box_cont3';
import Box_cont4 from './component/Box_cont4';
import Footer from './component/Footer'
import logo from './img/logo_prin.png';


function App() {
  return (
    <body className="corpo">
      <header className="header">
        <nav className="nav_principal">
          <div className="logo_header"><img src={logo} alt="logo" /></div>
          <div className="itens_centro">
            <div className="item_header"><p>Home</p></div>
            <div className="item_header"><p>Serviços</p></div>
            <div className="item_header"><p>Fale Conosco</p></div>
            <div className="item_header"><p>Sobre Nós</p></div>
          </div>
        </nav>
      </header>
      <main>
      <Slider_princ />
      <Box_cont1 />
      <Box_cont2 />
      <Box_cont3 />
      <Box_cont4 />
      <Footer />
      </main>
    </body>
  );
}

export default App;
