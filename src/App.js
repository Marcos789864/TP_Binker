import './App.css';
import Card from './components/Card'
import Boton from './components/Boton'
import Navbar from './views/Navbar'
import Inicio from './views/Inicio'
import AcercadeMi from './views/Acerca de Mi' 
import Conociminetos from './views/Conocimientos'

function App() {
  return (
    <>
      <Navbar/>
      
      <section id='Inicio'>
    <Inicio/>
      </section >
      <section id='AcercadeMi'>
      <AcercadeMi/>
      </section>
      <section>
        <Conociminetos/>
      </section>
      <section>
      </section>
      <section>
      </section>
      <section id='Contacto'>
        
      </section>
    </>
  );
}

export default App;
