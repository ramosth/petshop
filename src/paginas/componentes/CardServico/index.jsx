import './estilos.css'
import { Link } from 'react-router-dom'

const CardServico = ({ nome, preco, descricao, url }) => {
  return (<div className="card">
    <h3>{nome}</h3>
    <div>{preco}</div>
    <p>{descricao}</p>
    <Link to={`/${url}`}>Voltar para serviços</Link>
  </div>)
}

export default CardServico;