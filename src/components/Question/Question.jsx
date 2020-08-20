import React from 'react';
import ReactPlayer from 'react-player';
import { Formik, Form, Field, withFormik } from 'formik';

import Card from '../../shared/Card/Card';
import Button from '../../shared/Button/Button';

import s from './Question.module.sass';

const Question = ({ 
    question,
    handleSubmit,
    values: formikValues,
    setFieldValue,
}) => {
    return (
        <Card className={s['question-card']}>
            <div className={s['question__title_number']}>Вопрос №{question.id}</div>
            <ReactPlayer className={s['question__video']} controls playing url={question.video} />
            <form onSubmit={handleSubmit} className={s['question__form']}>
                <div className={s['question__title']}>{question.question}</div>
                {question.values.map(answer => {
                    return (
                        <label key={answer.label} className={s['question__label']}>
                            <input 
                                className={s['question__input']}
                                type="radio" 
                                name={question.id} 
                                value={answer.value}
                                checked={formikValues[question.id] === answer.value}
                                onChange={() => setFieldValue(question.id, answer.value)}
                            />
                            {answer.label}
                        </label>
                    )
                })}
                <Button className={s['question__button']} type="submit" disabled={!formikValues[question.id]}>Следующий вопрос</Button>
            </form>
        </Card>
    )
}

export default withFormik({
    mapPropsToValues: ({ question }) => ({
        [question.id]: 0,
    }),
    handleSubmit: (values, { props: { onSubmit } }) => {
        onSubmit(values);
    }
})(Question);