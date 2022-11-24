import imagen from '../../public/img/nosotros.jpg'
import styles from '~/styles/nosotros.css'


export function meta() {
  return {
    title: 'GuitarLA - Sobre Nosotros',
    description: 'Venta de guitarras, blog de música'
  }
}


export function links(){
  return [
    {
      rel: 'stylesheet',
      href: styles
    }, 
    {
      rel: 'preload',
      href: imagen,
      as: 'image'
    }
  ]
}


function Nosotros() {
  return (
    <main className="contenedor nosotros">
      <h2 className='heading'>Nosotros</h2>
      <div className='contenido'>
        <img src={imagen} alt="imagen sobre nosotros" />
        <div>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro nesciunt repellendus quod dolorum sit velit at quos iusto natus cum est et, distinctio voluptatibus, voluptates amet nemo hic alias facere.
          Consequuntur suscipit rem rerum earum dolor corporis esse cupiditate officia eligendi magnam numquam omnis dolores a minus recusandae enim, vel, incidunt doloremque perspiciatis provident sequi natus architecto. Amet eveniet suscipit odit odio non quae molestiae!</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente totam magni, unde amet tempore reiciendis autem harum fugiat necessitatibus itaque quo iure eius quidem, omnis ratione, nisi architecto accusamus non.</p>
        </div>
      </div>
    </main>
  )
}

export default Nosotros