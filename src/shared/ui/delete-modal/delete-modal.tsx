/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { useEffect } from 'react'

import styles from '@/shared/ui/delete-modal/delete-modal.module.css'

import { TrashIcon } from '@/shared/ui/icons/trash-icon'

interface DeleteModalProps {
  accept: () => void
  close: () => void
}

export const DeleteModal = ({ accept, close }: DeleteModalProps) => {
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
          <TrashIcon />
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
