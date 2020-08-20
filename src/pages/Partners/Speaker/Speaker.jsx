import React, { useState } from 'react';
import ReactPlayer from 'react-player';

import Modal from '../../../shared/Modal/Modal';
import Card from '../../../shared/Card/Card';
import Button from '../../../shared/Button/Button';

import s from './Speaker.module.sass';

const Speaker = ({ speaker }) => {
    const [isOpen, setOpen] = useState(false);
    const handlerClose = () => {
        setOpen(false);
    };
    return(
        <>
            <Card className={s['speaker-card']}>
                <img className={s['speaker-card__img']} src={speaker.photo} alt={speaker.name} />
                <div className={s['speaker-card__text']}>
                    <h3 className={s['speaker-card__title']}>{speaker.name}</h3>
                    {speaker.text}
                </div>
                <Button className={s['speaker-card__btn']} onClick={() => setOpen(true)}>Посмотреть видео</Button>
            </Card>
            <Modal onClose={handlerClose} isOpen={isOpen}>
                <ReactPlayer className={s['speaker-card__video']} controls url={speaker.video} />
            </Modal>
        </>
    )
};

export default Speaker;