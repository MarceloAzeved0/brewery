import React from 'react';

import { CardProps} from './Card.interface'
import styles from './styles.module.scss'

import classnames from 'classnames/bind'
const cn = classnames.bind(styles)

const Card: React.FC<CardProps> = ({ country, href, title, address, description, badge}) => {
  const badgeColor = {
    micro: 'green',
    brewpub: 'yellow',
    contract: 'dark',
    regional: 'blue',
    planning: 'red',
  }

  return (
    <a href={href} className={cn('card')}>
      <article className={cn('card_article')}>
        <p className={cn('card__title')}>
          {title}
        </p>
        <p className={cn('card__adresss')}>
          {address}
        </p>
        <p className={cn('card__description')}>
          {description}
        </p>
        <p className={cn('card__description')}>
          {country}
        </p>
        </article>
      <hr className={cn('card-line')}/>
      <div className={cn('card-badge')}>
        <p className={cn('card-badge__text', `card-badge__text--${badgeColor[badge.type] || 'red'}`)}>
          {badge.name}
        </p>
      </div>
    </a>
  )
}

export default Card;