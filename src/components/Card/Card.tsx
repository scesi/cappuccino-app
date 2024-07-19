import arrowIcon from '../../assets/arrowIcon.svg'

import './Card.css'
const Card = ({ title }: { title: string }) => {
  return (
    <section className="card">
      <h3>{title}</h3>
      <img src={arrowIcon} alt="Arrow icon" />
    </section>
  )
}

export default Card
