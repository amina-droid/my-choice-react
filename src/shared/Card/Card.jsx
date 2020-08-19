import React from 'react';
import cn from 'classnames';

import s from './Card.module.sass';

const Card = ({ className = '', title, subtitle, children }) => (
    <div className={cn(s.card, className)}>
        {title && <h3 className={s.card__title}>{title}</h3>}
        {subtitle && <h3 className={s.card__subtitle}>{subtitle}</h3>}
        {children}
    </div>
);

export default Card;
