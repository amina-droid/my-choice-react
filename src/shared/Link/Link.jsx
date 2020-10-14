import React from 'react';
import { NavLink } from 'react-router-dom';
import cn from 'classnames';

import Card from '../../shared/Card/Card';

import s from './Link.module.sass'

const Link = ({ img, className='', titleCard, ...props }) => {
    const linkClassName = cn(s['link'], className);
    if (props.to==='/v1/game') {
        return (
            <a className={linkClassName} href='/v1/game' target='_blank'>
                <Card>
                    {img && <img src={img} />}
                    <Card.Title>{titleCard}</Card.Title>
                </Card>
            </a>
        )
    }
    return (
        <NavLink 
            className={linkClassName}
            {...props}>
            <Card>
                {img && <img src={img} />}
                <Card.Title>{titleCard}</Card.Title>
            </Card>
        </NavLink>
    )
}

export default Link;