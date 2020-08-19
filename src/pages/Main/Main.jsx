import React from 'react';
import { NavLink } from 'react-router-dom';

import Page from '../../shared/Page/Page';
import Card from '../../shared/Card/Card';

import s from './Main.module.sass';
import Link from '../../shared/Link/Link';

const Main = () => (
    <Page className={s['main-page']}>

        <Link to="/game" titleCard='Игра "Мой выбор"' />
        <Link to="/test/partners" titleCard='Тест "Я гражданин"' />

    </Page>
)


export default Main;