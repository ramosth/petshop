import CardProduto from './componentes/CardProduto';
import Logo from './componentes/logo';
import imagemLogo from './home/logo_petshop.png';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const Produto = () => {

  const logo = {
    src: imagemLogo,
    alt: 'imagem da logo do petshop',
    titulo: 'Petshop Serratec'
  };

  const {id} = useParams();
  const [produto, setProduto] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8000/produtos/'+id)
      .then(response => {
        setProduto(response.data);
      }).catch(erro => console.log(erro))
  }, [id])

  return (<div>
    <Logo src={logo.src} alt={logo.alt} titulo={logo.titulo} />
      <CardProduto nome={produto.nome} preco={produto.preco} descricao={produto.descricao} url={'produtos'}
      />
  </div>

  )
}

export default Produto;