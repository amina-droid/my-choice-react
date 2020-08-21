import React, { useContext, useState, useEffect, useCallback } from 'react';
import { Redirect } from 'react-router-dom';
import { UserContext } from '../../context/user/user';
import { useHistory } from 'react-router-dom';

import Page from '../../shared/Page/Page';
import Card from '../../shared/Card/Card';
import Question from '../../components/Question/Question';
import getQuestions from '../../requests/getQuestions';

import s from './Test.module.sass';
import useRequest from '../../utils/useRequest';
import postAnswers from '../../requests/postAnswers';
import { TimerContext } from '../../context/timer/timer';
import Button from '../../shared/Button/Button';

const Test = () => {
    const [count, setCount] = useState(0);
    const [answers, setAnswers] = useState({});
    const [{ 
        error: questionsError, 
        loading: questionsLoading, 
        data: questions 
    }, questionsRequest] = useRequest(getQuestions);
    const [{ 
        error: answersError, 
        loading: answersLoading, 
        data: userResult 
    }, answersRequest] = useRequest(postAnswers);
    
    const { state: { user } } = useContext(UserContext);
    const { isTestEnd, isTestStart } = useContext(TimerContext);
    const history = useHistory();

    useEffect(() => {
        if (user) {
            questionsRequest();
        }
    }, [user, questionsRequest])


    useEffect(() => {
        if (questions && Object.keys(answers).length === questions.length) {
            answersRequest(user.id, answers);
        }
    }, [answers, questions, user, answersRequest])

    if (!user) {
        return (<Redirect to="/test/login" />);
    }

    //if (user.result) {
    //    return (
    //        <Page className={s['test-page']}>
    //            <Card title="Вы уже прошли тест." subtitle={`Ваш результат: ${user.result}`}/>
    //        </Page>
    //    )
    //}

    if (!isTestStart && !isTestEnd) {
        
        const goBack = () => history.push('/test/stream');
        return (
            <Page className={s['test-page']}>
                <Card title='Тест еще не начался' className={s['test-card']}>
                    <Button className={s['test-card__btn']} onClick = {goBack}>Вернуться назад</Button>
                </Card>
            </Page>
        )
    }
    if (isTestStart && isTestEnd) {
        
        const goBack = () => history.push('/test/stream');
        return (
            <Page className={s['test-page']}>
                <Card title='Тест уже закончился' className={s['test-card']}>
                    <Button className={s['test-card__btn']} onClick = {goBack}>Вернуться назад</Button>
                </Card>
            </Page>
        )
    }
    if (!questions || questionsLoading) {
        return (
            <Page className={s['test-page']}>
                <Card>Подождите</Card>
            </Page>
        )
    }

    const isQuestionsEnd = count === questions.length;
    return(
        <Page className={s['test-page']}>
            {!isQuestionsEnd ? (
                <Question onSubmit={(answer) => {
                    setCount(count + 1);
                    setAnswers({
                        ...answers,
                        ...answer,
                    })
                }} question={questions[count]} />
            ) : userResult ? (
                <Card title="Тест окончен" subtitle={`Ваш результат: ${userResult.result} из 50`} />
            ) : (
                <Card title='Тест окончен' />
            )}
        </Page>
    );
}

export default Test;