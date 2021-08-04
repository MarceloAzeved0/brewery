import React from 'react';

import styles from './styles.module.scss'

import classnames from 'classnames/bind'
const cn = classnames.bind(styles)

const Header: React.FC = () => {
  return (
    <header className={cn('header')}>
      <div className={cn('container', 'header--texts')}>
        <h1>Breweries</h1>
        <p>A breweries list by Open Brewery DB</p>
      </div>
    </header>
    )
}

export default Header;