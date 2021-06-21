import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Home from './paginas/home'
import Produtos from './paginas/Produtos'
import Servicos from './paginas/Servicos'
import Navbar from './paginas/componentes/Navbar';
import Pagina404 from './paginas/pagina404'
import Produto from './paginas/Produto'
import Servico from './paginas/Servico'

function App() {

  const menu = [
    {
      titulo: 'Inicio',
      link: '/'
    },
    {
      titulo: 'Produtos',
      link: '/produtos'
    },
    {
      titulo: 'Servicos',
      link: '/servicos'
    },
  ];

  return (
    <div className="App">
      <BrowserRouter>
      <Navbar navbar={menu} />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/produtos">
            <Produtos />
          </Route>
          <Route path="/produtos/:id">
            <Produto />
          </Route>
          <Route exact path="/servicos">
            <Servicos />
          </Route>
          <Route path="/servicos/:id">
            <Servico />
          </Route>
          <Route>
            <Pagina404 />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
