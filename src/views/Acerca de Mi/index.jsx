import Yo from '../../imgs/Yo.png'

const AcercadeMi = () =>
{
    return(
        <div className='ContainerCentrado'>
    <div className='ContainerAcercaInfo'>
        <h2>Hola! Me llamo Marcos Martinez</h2>
        <p>Soy estudiante de la escuela ORT</p>
        <p>Edad: 17 años</p>
        <p>Email: delfrancochili@gmail.com</p>
    </div>
    <div className='ContainerImg'>
        <img src={Yo} className='Img' alt="Marcos Martinez" />
    </div>
    </div>    
    )
    
}

export default AcercadeMi  