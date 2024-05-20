import Imagen from '../../components/Imagen'
const Card = (props) => 
{
    return(
        <div class="Centrar">
        <div class="card">
            <div class="card-header">
                <p>{props.titulo}</p>
                <Imagen/>
            </div>
            <div class="card-body">
                <p>Este es el contenido de la tarjeta. Puedes agregar cualquier texto o elementos HTML aquí.</p>
            </div>
        </div>
        </div>
   )
}


export default Card