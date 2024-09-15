import React from 'react'
import styles from './Container.module.scss';
export default function Container({children, type, className, ...props}) {
  return (
    <div className={`${styles.container} ${styles[type] || ""} ${className}`} {...props}>
        {children}
    </div>
  )
}
