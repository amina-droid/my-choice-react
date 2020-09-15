import React, { useContext, useState } from 'react';
import { Redirect } from 'react-router-dom';
import { Formik, Form, Field } from 'formik';
import { PlayerContext } from '../../context/player/player';

import Modal from '../../shared/Modal/Modal';
import Page from '../../shared/Page/Page';
import Button from '../../shared/Button/Button';


import { ReactComponent as NewRoom } from '../../icons/plus.svg';

import s from './Rooms.module.sass';


const Rooms = () => {
    const [isOpen, setOpen] = useState(false);
    const { userName, createRoom, choiceRoom, rooms } = useContext(PlayerContext);

    if (!userName) {
        return (<Redirect to="/game/login" />)
    }
    const handlerClose = () => {
        setOpen(false);
    };


    return (
        <Page className={s['rooms-page']}>
            {rooms.map(room => (
                <button 
                    onClick={() => {
                        choiceRoom(room.roomName)
                    }} 
                    type="button" 
                    key={room.roomName} 
                    className={s['rooms__card']}
                >
                    <span className={s['rooms__roomname']}>{room.roomName}</span>
                    <span className={s['rooms__user-count']}>Подключено: {room.userCount}</span>
                </button>
            ))}
            <button type="button" className={s['rooms__card']} onClick={() => setOpen(true)}>
                <NewRoom className={s['rooms_new-room']} />
            </button>
            <Modal onClose={handlerClose} isOpen={isOpen}>
                <Formik
                    initialValues={{
                        roomname: '',
                    }}
                    onSubmit={values => {
                        createRoom(values.roomname);
                        setOpen(false);
                    }
                    }>
                    <Form className={s['rooms_new-room__form']}>
                        <h3 className={s['rooms_new-room__title']}>Введите название комнаты</h3>
                        <Field className={s['rooms_new-room__input']} type="text" name="roomname" />
                        <Button className={s['rooms_new-room__button']} type="submit">Создать</Button>
                    </Form>
                </Formik>
            </Modal>
        </Page>
    )
}

export default Rooms;