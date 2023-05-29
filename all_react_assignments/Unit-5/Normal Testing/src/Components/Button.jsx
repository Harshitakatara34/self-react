import React from 'react'
import styles from "./button.module.css"
export const Button = ({children,color,size,handleAdd}) => {
  return (
    <button onClick={handleAdd} data-testid="custom-button" className={`${styles[color]} ${styles[size]}`}>{children}</button>
  )
}