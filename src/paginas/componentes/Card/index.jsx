import './estilos.css'
import { Link } from 'react-router-dom'

const Card = (props) => {
  return <div className="card">
    <p>
      {props.nome} - <strong>{props.preco}</strong>
    </p>
    <Link to={`/${props.url}/${props.id}`}>Ver detalhes</Link>
  </div>
}

export default Card;