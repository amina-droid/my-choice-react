import React from 'react';

import Page from '../../shared/Page/Page';
import Card from '../../shared/Card/Card';
import Link from '../../shared/Link/Link';

import gameLogo from '../../img/logoGame.jpg';
import testLogo from '../../img/logoTest.jpg';
import organizers from '../../img/organizers/organizers.png'

import s from './Main.module.sass';

const Main = () => (
    <Page className={s['main-page']}>

        <Link img={gameLogo} to="/game/login" titleCard='Игра "Мой выбор"' />
        <Card
            className={s['main-card_organizers']}
            title="Партнеры"
            
        >
            <img src={organizers} />
        </Card>
        <Link img={testLogo} to="/test/stream" titleCard='Тест "Я гражданин"' />

    </Page>
)


export default Main;