/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { useEffect } from 'react'

import styles from '@/shared/ui/delete-modal/delete-modal.module.css'

import { TrashIcon } from '@/shared/ui/icons/trash-icon'
import Button from '../Button/button'

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
          e.stopPropagation()
        }}
      >
        <div className={styles.modalTitle}>
          <TrashIcon className={styles.trashIcon}/>
          <p className={styles.modalText}>
            ¿Estás seguro de limpiar su horario?
          </p>
        </div>
        <div className={styles.buttonsContainer}>
          <Button variant="cancel" label="Cancelar" onClick={handleClose} />
          <Button variant="accept" label="Aceptar" onClick={handleAccept} />
        </div>
      </article>
    </div>
  )
}
