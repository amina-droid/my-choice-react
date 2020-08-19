import React, { useContext } from 'react';
import { Redirect } from 'react-router-dom';
import { Formik, Form, Field } from 'formik';
import { UserContext } from '../../context/user/user';

import Page from '../../shared/Page/Page';
import Card from '../../shared/Card/Card';
import Button from '../../shared/Button/Button';

import s from './TestLogin.module.sass';


const TestLogin = () => {
    const { state: { user, loading, error }, getUserRequest } = useContext(UserContext);

    if (user) {
        return (<Redirect to="/test" />);
    }
    return (
        <Page className={s['login-page']}>
            <Card
                className={s['login-card']}
                title='Тест "Я гражданин"'
                subtitle="Введите свой логин"
            >
                <Formik 
                    initialValues={{
                        id: '',
                    }}
                    onSubmit={async (values) => {
                        await getUserRequest(values.id);
                    }
                    }>
                    <Form className={s['login__form']} disabled={loading}>
                        <Field type="text" name="id" />
                        {error && (<div>{error}</div>)}
                        <Button className={s['login__button']} type="submit">Войти</Button>
                    </Form>
                </Formik>
            </Card>
        </Page>
    );
}
export default TestLogin;
