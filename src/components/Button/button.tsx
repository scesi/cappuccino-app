import clsx from 'clsx'

import styles from './button.module.css'

interface ButtonProps {
  onClick: () => void
  label: string
  type?: 'button' | 'submit' | 'reset'
  variant: 'cancel' | 'accept'
}

const Button = ({ onClick, label, type = 'button', variant }: ButtonProps) => {
  return (
    <button
      className={clsx({
        [styles.modalButtonAccept]: variant === 'accept',
        [styles.modalButtonCancel]: variant === 'cancel',
      })}
      onClick={onClick}
      type={type}
    >
      {label}
    </button>
  )
}
export default Button
