import imagemLogo from '../home/logo_petshop.png';
import Logo from '../componentes/logo'

const Home = () => {

  const logo = {
    src: imagemLogo,
    alt: 'imagem da logo do petshop',
    titulo: 'Petshop Serratec'
  };

  return (<header>
    <Logo src={logo.src} alt={logo.alt} titulo={logo.titulo} />
    <h2>Descricao</h2>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic ex repellat autem vitae maiores asperiores enim cupiditate beatae! Nulla obcaecati, minima omnis sunt dolores suscipit odio quo iure voluptatum animi?
    </p>
  </header>

  )
}

export default Home;