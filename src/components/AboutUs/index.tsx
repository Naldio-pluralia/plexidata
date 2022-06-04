import styles from './about.module.scss'

export function AboutUs() {
  return (
    <div className={styles.aboutContainer} id="aboutUs">
      <img src="/assets/triangle.png" alt="Triângulo Plexidata" />
      <div className={styles.aboutContent}>
        <h3>Quem Somos</h3>
        <p>
          A <strong>Plexidata</strong> – Consultoria e Formação, Lda., é uma empresa criada a  22 de Fevereiro de 2022, com o objectivo de contribuir para a divulgação do Direito à Protecção dos Dados Pessoais, como direito fundamental e dar resposta à necessidade de Conformação da actuação das Organizações (Empresas e Instituições) ao quadro legal sobre a matéria, oferecendo formação, consultoria, certificação e conferências sobre tão importantes matérias.
        </p>

      </div>
    </div>
  )
}