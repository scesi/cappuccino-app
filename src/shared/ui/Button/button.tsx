import styles from './button.module.css'

interface ButtonProps {
  onClick: () => void
  label: string
  type?: 'button' | 'submit' | 'reset'
  variant: 'cancel' | 'accept'
}

const Button = ({ onClick, label, type="button", variant }: ButtonProps) => {
  return (
    <>
      {variant === 'accept' && (
        <button
          className={styles.modalButtonAccept}
          onClick={onClick}
          type={type}
        >
          {label}
        </button>
      )}
      {variant === 'cancel' && (
        <button
          className={styles.modalButtonCancel}
          onClick={onClick}
          type={type}
        >
          {label}
        </button>
      )}
    </>
  )
}
export default Button
