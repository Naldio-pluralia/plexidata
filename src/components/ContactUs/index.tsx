import { HiLocationMarker } from 'react-icons/hi'
import { FaPhoneAlt, FaEnvelope, } from 'react-icons/fa'
import styles from './contact-us.module.scss'
import { FormEvent, useState } from 'react';
import { toast } from 'react-toastify';
import { doc, setDoc } from 'firebase/firestore';
import { v4 as uuid } from 'uuid'
import { db } from '../../services/firebase';
import { validateEmail } from '../../utils/validators';


export function ContactUs() {
  const [email, setEmail] = useState("");

  async function handleRegistration(event: FormEvent) {
    event.preventDefault();

    if (!email || !validateEmail(email)) {
      toast.error("Email invalido", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      })

      return;
    }

    const docRef = doc(db, "newsletters", uuid())

    try {

      await setDoc(docRef, { email })

      toast.success("Subscrição realizada com sucesso", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      })

      setEmail('')

    } catch (error) {
      toast.error("Ocorreu um erro contacte a Plexidata", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      })
    }
  }

  return (
    <div className={styles.contactContainer} id="contactUs">
      <div className={styles.wrapperContainer}>
        <div className={styles.contact}>
          <h3>Contactos</h3>
          <div className={styles.contactInfo}>
            <FaEnvelope />
            <a href='mailto:geral@plexidata.ao'>geral@plexidata.ao</a>
          </div>
          <div className={styles.contactInfo}>
            <FaPhoneAlt />
            <a href='mailto:+244933911070'>+244 938 00 53 00</a>
          </div>
          <div className={styles.contactInfo}>
            <HiLocationMarker />
            <span>Rua 28 de Maio, 15 - 17, Edifício Kende, 5º. Andar, Esquerdo, Maianga, Luanda</span>
          </div>
        </div>

        <form
          onSubmit={handleRegistration}
          className={styles.newsletter}
        >
          <h3>Newsletter</h3>
          <p>Inscreva-se e receba todas novidades</p>
          <input
            type="text"
            placeholder='Digite o seu email'
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
          <button type='submit'>
            Subscrever
          </button>
        </form>
      </div>
    </div>
  )
}