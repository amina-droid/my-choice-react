import React from 'react';
import cn from 'classnames';

import Card from '../../shared/Card/Card'

import partner1 from '../../img/partner-1.png';
import partner2 from '../../img/partner-2.png';
import partner3 from '../../img/partner-3.png';

import s from './Partner.module.sass';

const Partner = () => (
    <Card className={s['partner-card']}>
        <h4 className={s['partner-card__title']}>При поддержке:</h4>
        <img className={s['partner-card__img']} src={partner1} alt="partner1" />
        <img className={s['partner-card__img']} src={partner2} alt="partner2" />
        <img className={cn(s['partner-card__img'], s['partner-card__img_mini'])} src={partner3} alt="partner3" />
    </Card>
);

export default Partner;