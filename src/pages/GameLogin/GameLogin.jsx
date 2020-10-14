import React, { useContext } from 'react';
import { Redirect } from 'react-router-dom';
import { Formik, Form, Field } from 'formik';

import { PlayerContext } from '../../context/player/player';

import Page from '../../shared/Page/Page';
import Card from '../../shared/Card/Card';
import Partner from '../../components/Partner/Partner';
import Button from '../../shared/Button/Button';

import s from './GameLogin.module.sass';



const GameLogin = () => {
    const { userName, login } = useContext(PlayerContext);
    if (userName) {
        return (<Redirect to="/rooms" />)
    }
    return (
        <Page className={s['login-page']}>
            <Card
                className={s['login-card']}
                title='Игра "Мой выбор"'
                subtitle="Введите свое имя"
            >
                <Formik 
                    initialValues={{
                        name: '',
                    }}
                    onSubmit={values => {
                        login(values.name);
                    }
                    }>
                    <Form className={s['login__form']}>
                        <Field className={s['login__input']} type="text" name="name" />
                        <Button className={s['login__button']} type="submit">Войти</Button>
                    </Form>
                </Formik>
            </Card>
            <Partner />
        </Page>
    );
};

export default GameLogin;
