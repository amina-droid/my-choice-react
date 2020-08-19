import React from 'react';

import Page from '../../shared/Page/Page';
import Card from '../../shared/Card/Card';
import Partner from '../../components/Partner/Partner'

import s from './Login.module.sass';

const Login = () => (
    <Page className={s['login-page']}>
        <Card
            className={s['login-card']}
            title='Игра "Мой выбор"'
            subtitle="Введите свое имя"
        />
        <Partner />
    </Page>
);

export default Login;
