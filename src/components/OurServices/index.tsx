import { AiFillCheckCircle } from 'react-icons/ai'
import { BsArrowRightSquare } from 'react-icons/bs'
import styles from './our-services.module.scss'

export function OurServices() {

  return (
    <div className={styles.ourServicesContainer} id="services">
      <div className={styles.title}>
        <h3>Nossos serviços</h3> 
        <BsArrowRightSquare />
      </div>
      <div className={styles.cardSections}>
        <span>Formação</span>
        <span>Consultoria</span>
        <span>Certificação</span>
      </div>
      <div className={styles.cardContent}>
        <div><AiFillCheckCircle /><span>Proteção de dados</span></div>
        <div><AiFillCheckCircle /><span>Ciber Segurança</span></div>
        <div><AiFillCheckCircle /><span>Compliance</span></div>
        <div><AiFillCheckCircle /><span>Anti Money Laundering (AML)</span></div>
      </div>
    </div>
  )
}