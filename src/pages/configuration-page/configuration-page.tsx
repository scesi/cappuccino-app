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
      <div className={styles.sizeFontContainer}>
        <p className={styles.configLabel}>Tamaño de Fuente</p>
        <div className={styles.dropdownSizeFont}>
          <button className="">Selecciona el tamano</button>
          <div className={styles.dropdownSizeContent}>
            <button className="">Pequeno</button>
            <button className="">Mediano</button>
            <button className="">Grande</button>
          </div>
        </div>
      </div>
      <p className={styles.configLabel}>Estilo de Fuente</p>
      <p className={styles.configLabel}>Temas</p>
      <div className={styles.configButtonContainer}>
        <button className={styles.configButtonSecondary}>Cancelar</button>
        <button className={styles.configButtonPrimary}>Guardar</button>
      </div>
    </section>
  )
}

export default ConfigurationPage
