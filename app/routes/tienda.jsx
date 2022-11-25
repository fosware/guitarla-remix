import { useLoaderData } from "@remix-run/react"
import { getGuitarras } from "~/models/guitarras.server"
import Guitarra from "~/components/guitarra"
import styles from '~/styles/guitarras.css'

export function meta() {
  return {
    title: 'GuitarLA - Tienda de Guitarras',
    description: 'GuitarLa - Nuestra colección de guitarras'
  }
}

export function links(){
  return [
    {
      rel: 'stylesheet',
      href: styles
    }
  ]
}

export async function loader() {  
  const guitarras = await getGuitarras()
  return  guitarras.data
}

function Tienda() {
  const guitarras = useLoaderData()  
 
  return (
    <main className="contenedor">
      <h2 className="heading">Nuestras Guitarras</h2>
      { guitarras.length && (
        <div className="guitarras-grid">
          {guitarras.map(guitarra => (
              <Guitarra 
                  key = {guitarra?.attributes.url}
                  guitarra = {guitarra?.attributes}
              
                
              />
          ))}
        </div>
      )}
    </main>
  )
}

export default Tienda