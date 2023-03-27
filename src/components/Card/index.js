import './Card.css';
import iconeGostar from '../../images/icone-gostar.png';
import iconeComentarios from '../../images/icone-comentarios.png';

function Card(props) {
    return (
        <div className='card'>
        <img src='https://www.anamariabrogui.com.br/assets/uploads/receitas/fotos/usuario-2546-a1389531b02cf1ed297623aaa42341e1.jpg' />
        <div className='card-descricao'>
          <h2>{props.titulo}</h2>
          <p></p>
          <div className='card-interacoes'>
            <div className='card-likes'>
              <img src={iconeGostar} />
              <span>15 likes</span>
            </div>
            <div className='card-comentarios'>
              <img src={iconeComentarios} />
              <span>27 comentarios</span>
            </div>
          </div>
        </div>
      </div>
    )
}

export default Card;