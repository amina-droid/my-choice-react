import React, { useContext, useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { Redirect } from 'react-router-dom';
import { UserContext } from '../../context/user/user';
import { APIadress } from '../../utils/API';

import Page from '../../shared/Page/Page';
import Card from '../../shared/Card/Card';
import Button from '../../shared/Button/Button';

import Question from '../../components/Question/Question';
import getQuestions from '../../requests/getQuestions';
import useRequest from '../../utils/useRequest';
import postAnswers from '../../requests/postAnswers';

import s from './Test.module.sass';

import { ReactComponent as Back } from '../../icons/back.svg';

const Test = () => {
    const history = useHistory();
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
    

    useEffect(() => {
        questionsRequest();
    }, [questionsRequest])


    useEffect(() => {
        if (questions && Object.keys(answers).length === questions.length) {
            answersRequest(answers);
        }
    }, [answers, questions, answersRequest])

    const navigateToBack = () => history.push('/test/stream');

    const renderFinal = () => {
        return (
            <Page className={s['test-page']}>
                <Button className={s['test-page__button_back']} onClick={navigateToBack} >
                    <Back />
                </Button>
                <Card className={s['test-card']} title="Вы прошли тест" subtitle={`Ваш результат: ${userResult.result} из ${questions.length}`} />
            </Page>
        )
    }
    if (userResult) {
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
            <Button className={s['test-page__button_back']} onClick={navigateToBack} >
                <Back />
            </Button>
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