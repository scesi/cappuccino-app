import styles from './configuration-page.module.css'

const ConfigurationPage = () => {
  return (
    <section className={styles.configContainer}>
      <h3 className="">CONFIGURACIONES</h3>
      <p className={styles.configLabel}>
        Mantener el horario al cerrar el navegador
      </p>
      <p className={styles.configLabel}>Modo Oscuro</p>
      <p className={styles.configVisualTitle}>Configuracion Visual</p>
      <div className={styles.configRowContainer}>
        <p className={styles.configLabel}>Tamaño de Fuente</p>
        <div>
          <select className={styles.selector} name="select">
            <option value="value1">Pequeno</option>
            <option value="value2">Mediano</option>
            <option value="value3">Grande</option>
          </select>
        </div>
      </div>
      <div className={styles.configRowContainer}>
        <p className={styles.configLabel}>Estilo de Fuente</p>
        <div>
          <select className={styles.selector} name="select">
            <option value="value1">Poppins</option>
            <option value="value2">Roboto</option>
            <option value="value3">Times</option>
          </select>
        </div>
      </div>
      <p className={styles.configLabel}>Temas</p>
      <div className={styles.configButtonContainer}>
        <button className={styles.configButtonSecondary}>Cancelar</button>
        <button className={styles.configButtonPrimary}>Guardar</button>
      </div>
    </section>
  )
}

export default ConfigurationPage
