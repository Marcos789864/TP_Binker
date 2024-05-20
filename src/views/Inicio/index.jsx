import wave from '../../imgs/wave-bg.svg'
import persona from '../../imgs/hello3.svg'

const Inicio = () =>
{
    return(
        <div>
        <div className='containerW'>
            <img src={persona}></img>
            <h3>Hola!</h3>
            
            <h1>Soy Marcos Martinez</h1>
        </div>
        <div>
        <img src={wave} className='Wave'></img>
        </div>
        </div>
       
        
        
        
    )
    
}

export default Inicio