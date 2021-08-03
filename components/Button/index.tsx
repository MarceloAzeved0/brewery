import React from 'react';

import { ButtonProps } from './Button.interface'

import styles from './styles.module.scss'
import classnames from 'classnames/bind'
const cn = classnames.bind(styles)

const Button: React.FC<ButtonProps> = ( {children, theme, ...props}) => {
  return <button className={cn('button', `button--${theme}`)} {...props}> {children}</button>
}

export default Button;