import React, { useContext, useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import { UserContext } from '../../context/user/user';
import { APIadress } from '../../utils/API';

import Page from '../../shared/Page/Page';
import Card from '../../shared/Card/Card';
import Question from '../../components/Question/Question';
import getQuestions from '../../requests/getQuestions';

import s from './Test.module.sass';
import useRequest from '../../utils/useRequest';
import postAnswers from '../../requests/postAnswers';

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

    const renderFinal = () => {
        return (
            <Page className={s['test-page']}>
                <Card className={s['test-card']} title="Вы прошли тест" subtitle={`Ваш результат: ${user.result || userResult.result} из 50`} />
            </Page>
        )
    }
    if (user.result || userResult) {
        return renderFinal();
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
                renderFinal()
            ) : (
                <Card title='Тест окончен' />
            )}
        </Page>
    );
}

export default Test;