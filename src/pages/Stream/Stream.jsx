import React from 'react';
import { useHistory } from 'react-router-dom';
import ReactPlayer from 'react-player';

import s from './Stream.module.sass';
import Page from '../../shared/Page/Page';
import Button from '../../shared/Button/Button';
import Card from '../../shared/Card/Card';


const Stream = () => {
    const history = useHistory();
    const navigateToPartners = () => history.push('/test/partners');
    const navigateToTest = () => history.push('/test');
    return (
        <Page className={s['stream-page']}>
            <Card
                className={s['stream-card']}
                title="Скоро здесь появится видеотрансляция"
            >
                <div className={s['black']}></div>
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