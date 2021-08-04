import React from 'react';

import styles from './styles.module.scss'

import classnames from 'classnames/bind'
const cn = classnames.bind(styles)

const Footer: React.FC = () => {
  return  (
    <footer className={cn('footer')}>
      <p>
        Breweries List
      </p>
    </footer>
  )
}

export default Footer;