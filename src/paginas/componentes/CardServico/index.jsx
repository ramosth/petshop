import './estilos.css'
import { Link } from 'react-router-dom'

const CardServico = ({ nome, preco, descricao, url }) => {
  return (<div className="card">
    <h3>{nome}</h3>
    <div><strong>{preco}</strong></div>
    <p>{descricao}</p>
    <Link className="link" to={`/${url}`}>Voltar para serviços</Link>
  </div>)
}

export default CardServico;