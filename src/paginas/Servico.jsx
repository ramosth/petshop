import CardServico from './componentes/CardServico';
import Logo from './componentes/logo';
import imagemLogo from './home/logo_petshop.png';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const Servico = () => {

  const logo = {
    src: imagemLogo,
    alt: 'imagem da logo do petshop',
    titulo: 'Petshop Serratec'
  };

  const {id} = useParams();
  const [servico, setServico] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8000/servicos/'+id)
      .then(response => {
        setServico(response.data);
      }).catch(erro => console.log(erro))
  }, [id])

  return (<div>
    <Logo src={logo.src} alt={logo.alt} titulo={logo.titulo} />
      <CardServico nome={servico.nome} preco={servico.preco} descricao={servico.descricao} url={'servico'}
      />
  </div>

  )
}

export default Servico;