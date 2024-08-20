import { FC, useEffect } from 'react'

import styles from '@/shared/ui/delete-modal/delete-modal.module.css'

import trashIcon from '@/assets/trash-icon.svg'

interface DeleteModalProps {
  accept: () => void
  close: () => void
}

export const DeleteModal: FC<DeleteModalProps> = ({ accept, close }) => {
  useEffect(() => {
    document.body.style.overflow = 'hidden'

    return () => {
      document.body.style.overflow = 'auto'
    }
  }, [])

  const handleAccept = () => {
    accept()
    close()
  }

  const handleClose = () => {
    close()
  }

  return (
    <div className={styles.deleteModalContainer} onClick={handleClose}>
      <article
        className={styles.deleteModal}
        onClick={(e) => {
          e.stopPropagation
        }}
      >
        <div className={styles.modalTitle}>
          <img src={trashIcon} alt="" className={styles.modalIcon} />
          <p className={styles.modalText}>
            ¿Estás seguro de limpiar su horario?
          </p>
        </div>
        <div className={styles.buttonsContainer}>
          <button className={styles.modalButtonAccept} onClick={handleClose}>
            Cancelar
          </button>
          <button className={styles.modalButtonCancel} onClick={handleAccept}>
            Confirmar
          </button>
        </div>
      </article>
    </div>
  )
}
