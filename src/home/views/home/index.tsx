import { HeroSection, LinkCard } from '@/home/components'

import { SearchBar } from '@/shared/ui'

import styles from './home-page.module.css'

export const HomePage = () => {
  return (
    <>
      <HeroSection />

      <section className={styles.careers}>
        <SearchBar title="Busca tu carrera" />
        <LinkCard title="LICENCIATURA EN BIOLOGÍA" />
        <LinkCard title="LICENCIATURA EN DIDACTICA DE LA FISICA" />
        <LinkCard title="LICENCIATURA EN DIDACTICA DE LA MATEMATICA" />
        <LinkCard title="LICENCIATURA EN FISICA" />
        <LinkCard title="LICENCIATURA EN INGENIERIA CIVIL (NUEVO)" />
        <LinkCard title="LICENCIATURA EN INGENIERIA DE ALIMENTOS" />
        <LinkCard title="LICENCIATURA EN INGENIERIA DE SISTEMAS" />
        <LinkCard title="LICENCIATURA EN INGENIERIA ELECTRICA" />
        <LinkCard title="LICENCIATURA EN INGENIERIA ELECTROMECANICA" />
      </section>
    </>
  )
}
