import { useModal } from '../../hooks/useModal'
import { Link } from 'react-scroll'

import styles from './header.module.scss'

export function Header() {
  const { setIsOpen } = useModal()

  return (
    <div className={styles.headerContainer} id="home">
      <div className='logo'>
        <img src="/assets/icon.png" alt="Plexidata" />
        <h1>Plexidata</h1>
      </div>
      <nav>
        <Link style={{cursor: 'pointer'}} to="home" activeClass="active" spy={true} smooth={true} offset={50} duration={500}>Inicio</Link>
        <Link style={{cursor: 'pointer'}} to="aboutUs" activeClass="active" spy={true} smooth={true} offset={50} duration={500}>Quem Somos</Link>
        <Link style={{cursor: 'pointer'}} to="services" activeClass="active" spy={true} smooth={true} offset={50} duration={500}>Serviços</Link>
        <Link style={{cursor: 'pointer'}} to="contactUs" activeClass="active" spy={true} smooth={true} offset={50} duration={500}>Contactos</Link>
      </nav>
      <button onClick={() => setIsOpen(true)}>Inscreva-se</button>
    </div>
  )
}