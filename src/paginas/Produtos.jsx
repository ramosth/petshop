import Card from './componentes/Card';
import Logo from './componentes/logo';
import imagemLogo from './home/logo_petshop.png';
import { useState, useEffect } from 'react';
// import axios from 'axios';
import http from '../paginas/http'

const Produtos = () => {

  const logo = {
    src: imagemLogo,
    alt: 'imagem da logo do petshop',
    titulo: 'Petshop Serratec'
  };

  const [produtos, setProdutos] = useState([]);

  const obterProdutos = () => {
    http.get('produtos')
      .then(response => {
        setProdutos(response.data);
      }).catch(erro => console.log(erro))
  }

  useEffect(() => {
    obterProdutos();
  }, [])

  return (<div>
    <Logo src={logo.src} alt={logo.alt} titulo={logo.titulo} />
    <h1>Produtos</h1>
    {produtos.map((item) =>
      <Card key={item.id} id={item.id} nome={item.nome} preco={item.preco} url={'produtos'}/>
    )}
  </div>

  )

}

export default Produtos;