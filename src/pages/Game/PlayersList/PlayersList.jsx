import React, { useState } from 'react';
import Button from '../../../shared/Button/Button';

import { ReactComponent as Close } from '../../../icons/close.svg';
import s from '../Game.module.sass';

const PlayersList = () => {
    const [isOpen, setIsOpen] = useState(false);
    if (isOpen) {
        return (
            <div className={s['players-list__popover']}>
                <div className={s['popover__header']}>
                    <h3 className={s['popover__title']}>Таблица игроков</h3>
                    <Button onClick={() => setIsOpen(false)} className={s['popover__button_close']}>
                        <Close />
                    </Button>
                </div>
                <div className={s['popover__body']}>
                    <table className={s['players__table']}>
                        <thead>
                            <tr>
                                <th className={s['th']}>№</th>
                                <th className={s['th']}>Имя</th>
                                <th className={s['th']}>СК (Б)</th>
                                <th className={s['th']}>СК (Ч)</th>
                                <th className={s['th']}>₽</th>
                                <th className={s['th']}>Ж</th>
                            </tr>
                        </thead>
                        <tbody className={s['players__tbody']} />
                    </table>
                </div>
            </div>
        )
    }
    return (
        <div className={s['players-list__contain']}>
            <Button className={s['players-list__open-button']} onClick={() => setIsOpen(true)}>Таблица игроков</Button>
        </div>

    )
}

export default PlayersList;