import { GroupProps } from './group-props.interface'

import styles from './group.module.css'

export function Group({ group, subjectId }: GroupProps) {
  return (
    <li className={styles.group}>
      <input
        id={`${subjectId}-${group.code}`}
        type="checkbox"
        className={styles.groupCheckbox}
      />

      <label
        htmlFor={`${subjectId}-${group.code}`}
        className={styles.groupName}
      >
        G: {group.code} {group.teacherName}
      </label>
    </li>
  )
}
