import React from 'react';
import cn from 'classnames';

import s from './Button.module.sass'

const Button = ({ className='', ...props }) => {
    const buttonClassName = cn(s['button'], className);
    return (
        <button 
            className={buttonClassName} 
            {...props}
        />
    )
}

export default Button;