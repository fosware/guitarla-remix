import { Link } from '@remix-run/react'
import logo from '../../public/img/logo.svg'

function Header() {
  return (
    <header className='header'> 
        <div className="contendor barra">
            <Link to ="/"
               className="logo">
                <img 
                    className='logo'
                    src={logo}
                    alt="Imagen logo" />

            </Link>
            <nav className='navegacion'>
                <Link
                    to="/"
                >Inicio</Link>
                <Link
                    to="/tienda"
                >Tienda</Link>
                <Link
                    to="/blog"
                >
                Blog</Link>
                <Link
                    to="/nosotros"
                >Nosotros</Link>
            </nav>

        </div>
    </header>
  )
}

export default Header