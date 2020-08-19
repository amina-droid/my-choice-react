import React from 'react';
import { NavLink } from 'react-router-dom';
import cn from 'classnames';

import Card from '../../shared/Card/Card';

import s from './Link.module.sass'

const Link = ({ className='', titleCard, ...props }) => {
    const linkClassName = cn(s['link'], className)
    return (
        <NavLink 
            className={linkClassName}
            {...props}>
            <Card
                title={titleCard}
            />
        </NavLink>
    )
}

export default Link;