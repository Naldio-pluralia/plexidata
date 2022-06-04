import { FormEvent, useEffect, useState } from 'react';
import { setDoc, doc, collection, getDoc } from 'firebase/firestore'
import styles from './register.module.scss'
import { db } from '../../services/firebase';
import { v4 as uuid } from 'uuid'
import { toast } from 'react-toastify';

interface RegisterProps {
  close: () => void
}

interface CheckboxAreas {
  training: boolean;
  consulting: boolean;
  certification: boolean;
}

export function Register({ close }: RegisterProps) {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [company, setCompany] = useState("");
  const [charge, setCharge] = useState("");
  const [areas, setAreas] = useState<string[]>([]);
  const [checkboxes, setCheckboxes] = useState<CheckboxAreas>({
    training: false,
    consulting: false,
    certification: false
  });
  const [agree, setAgree] = useState(false);

  function handleCheckboxes(type: string, value: boolean) {
    setCheckboxes({ ...checkboxes, [type]: !value })
  }


  async function handleRegistration(event: FormEvent) {
    event.preventDefault();



    if (!name || !email || !phoneNumber || !company || !charge) {
      toast.error("Todos os campos são obrigatórios", {
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

    const docRef = doc(db, "customers", uuid())

    try {

      const {training, consulting, certification} = checkboxes

      await setDoc(docRef, {
        name,
        email,
        phoneNumber,
        company,
        charge,
        areas: `${training ? 'Formação,' : ''}${consulting ? 'Consultoria,' : ''}${certification ? 'Certificação' : ''}`
      })

      close();

      toast.success("Registo efectuado com sucesso", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      })

    } catch (error) {
      toast.error("Ocorreu um erro contact a Plexidata", {
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
    <div className={styles.registerContainer}>
      <form onSubmit={handleRegistration}>
        <div className={styles.formGroup}>
          <label htmlFor="">Nome</label>
          <input
            type="text"
            id='name'
            placeholder='Digite o seu nome'
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="email">Email</label>
          <input
            type="email" id="email"
            placeholder='Digite o seu email'
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="phoneNumber">Telefone</label>
          <input
            type="tel"
            id="phoneNumber"
            placeholder="Digite o seu nº de telefone"
            value={phoneNumber}
            onChange={(event) => setPhoneNumber(event.target.value)}
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="company">Empresa</label>
          <input
            type="text"
            id='company'
            placeholder="Digite o nome da sua empresa"
            value={company}
            onChange={(event) => setCompany(event.target.value)}
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="charge">Cargo</label>
          <input
            type="text"
            id='charge'
            placeholder="Digite o seu cargo na empresa"
            value={charge}
            onChange={(event) => setCharge(event.target.value)}
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="areas">Interesse</label>
          <div className={styles.checkGroup}>
              <span
                onClick={() => handleCheckboxes('training', checkboxes.training)}
                className={checkboxes.training ? styles.checkboxActive : ''}
              >Formação</span>
              <span
                onClick={() => handleCheckboxes('consulting', checkboxes.consulting)}
                className={checkboxes.consulting ? styles.checkboxActive : ''}
              >Consultoria</span>
              <span
                className={checkboxes.certification ? styles.checkboxActive : ''}
                onClick={() => handleCheckboxes('certification', checkboxes.certification)}
              >
                Certificação
              </span>
          </div>
        </div>
        <div className={styles.formGroup}>
          <div className={styles.term}>
            <input type="checkbox" id='agree' checked={agree} onChange={(_) => setAgree(!agree)}  />
            <div className={styles.termBox}>
              <label htmlFor="agree">Eu concordo com a  <a target="_blank" href="/assets/Plexidata_Politica_de_Privacidade.pdf">política de privacidade</a> da Plexidata</label>
            </div>
          </div>
        </div>
        {agree && <div className={styles.buttons}>
          <button type='submit'>Cadastrar</button>
        </div>}
      </form>
    </div>
  )
}
