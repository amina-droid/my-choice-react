import React from 'react';
import cn from 'classnames';

import s from './Card.module.sass';

const Title = ({ children }) => {
    return (
        <h3 className={s.card__title}>{children}</h3>
    )
}
const Card = ({ className = '', title, subtitle, children }) => (
    <div className={cn(s.card, className)}>
        {title && <Title>{title}</Title>}
        {subtitle && <h3 className={s.card__subtitle}>{subtitle}</h3>}
        {children}
    </div>
);

Card.Title = Title;

export default Card;
