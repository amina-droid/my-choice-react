import React from 'react';
import { useHistory } from 'react-router-dom';
import ReactPlayer from 'react-player';

import Page from '../../shared/Page/Page';
import Button from '../../shared/Button/Button';
import Card from '../../shared/Card/Card';

import { ReactComponent as Back } from '../../icons/back.svg';

import s from './Stream.module.sass';


const Stream = () => {
    const history = useHistory();
    const navigateToPartners = () => history.push('/test/partners');
    const navigateToTest = () => history.push('/test');
    const navigateToBack = () => history.push('/');
    return (
        <Page className={s['stream-page']}>
            <Button className={s['stream-page__button_back']} onClick={navigateToBack} >
                <Back />
            </Button>
            <Card
                className={s['stream-card']}
                title="Видеотрансляция с диктанта"
            >
                <ReactPlayer className={s['stream-video']} controls url="https://www.youtube.com/watch?v=Dzaxv97nhVQ&feature=youtu.be" />
                <div className={s['stream-alert']}>Дорогие друзья! Обращаем внимание, что диктант "Я гражданин" 2020-года завершен. У Вас есть возможность пройти тест, но результаты засчитаны уже не будут!</div>
                <Button onClick={navigateToPartners} className={s['stream-card__button']}>Спикеры</Button>
                <Button onClick={navigateToTest} className={s['stream-card__button']}>Пройти тест</Button>
                <Button className={s['stream-card__button']}>
                    <a href={process.env.PUBLIC_URL + '/Ya_grazhdanin_2020_Polozhenie.pdf'} target="_blank" rel="noopener" className={s['partners__svg']}>
                        Положениe
                    </a>
                </Button>
                <Button className={s['stream-card__button']}>
                    <a href={process.env.PUBLIC_URL + '/Istoria_pochetnogo_grazhdanstva_v_Rossii.pdf'} target="_blank" rel="noopener" className={s['partners__svg']}>
                        История
                    </a>
                </Button>

            </Card>
            
        </Page>
    )
}

export default Stream;