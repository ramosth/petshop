import Logo from '../componentes/logo'
import imagemLogo from '../home/logo_petshop.png';
import imagem404 from '../pagina404/code_404_error.jpg'
import './estilos.css'

const Pagina404 = () => {

  const logo = {
    src: imagemLogo,
    alt: 'imagem da logo do petshop',
    titulo: 'Petshop Serratec'
  };


  return (<div>
    <Logo src={logo.src} alt={logo.alt} titulo={logo.titulo} />
    <img src={imagem404} alt={'imagem de erro 404'} />

  </div>
  )
}

export default Pagina404;