import React, { useContext } from 'react';
import { TimerContext } from '../../context/timer/timer';

import s from './Timer.module.sass';
import Card from '../../shared/Card/Card';

const Timer = () => {
    const { currentTime, isTestEnd, isTestStart } = useContext(TimerContext);
    const hours = currentTime && currentTime.getHours();
    const minutes = currentTime && currentTime.getMinutes();
    const seconds = currentTime && currentTime.getSeconds();

    const time = (hours || minutes || seconds) ? `${hours}:${minutes}:${seconds}` : '00:00:00';
    let subTitle = 'до начала теста';
    if (isTestStart) {
        subTitle = 'до конца теста';
    } 
    if (isTestEnd) {
        subTitle = 'тест окончен';
    }
    return (
        <Card title={!isTestEnd && time} subtitle={subTitle} className={s['timer-card']} />
    )
}

export default Timer;