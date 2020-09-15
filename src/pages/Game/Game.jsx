import React, { useContext, useState } from 'react';
import { Redirect, useHistory } from 'react-router-dom';

import { PlayerContext } from '../../context/player/player';

import Page from '../../shared/Page/Page';
import Button from '../../shared/Button/Button';
import PlayersList from './PlayersList/PlayersList';
import Modal from '../../shared/Modal/Modal';

import { ReactComponent as GameField } from './game.svg';
import { ReactComponent as Close } from '../../icons/close.svg';

import s from './Game.module.sass';



const Game = () => {
    const [isOpen, setIsOpen] = useState(false);
    const { userName,roomName, leaveRoom } = useContext(PlayerContext);
    const history = useHistory();
    const navigateToBack = () => {
        leaveRoom(roomName);
        history.push('/rooms');
    }
    
    const handlerClose = () => {
        setIsOpen(false);
    }
    if (!userName) {
        return (<Redirect to="/game/login" />)
    }

    return (
        <Page className={s['game-page']}>
            <div className={s['game__header']}>
                <PlayersList />
                <Button className={s['game__button_close']} onClick={() => { setIsOpen(true) }}>
                    <Close />
                </Button>
            </div>
            <div className={s['game-field']}>
                <GameField className={s['game-field_svg']} />
            </div>

            <Modal className={s['game__modal_leave-room']} onClose={handlerClose} isOpen={isOpen}>
                <h3 className={s['modal__title']}>Выйти из комнаты?</h3>
                <Button className={s['two-button']} onClick={navigateToBack}>Да</Button>
                <Button className={s['two-button']} onClick={() => { setIsOpen(false) }}>Отмена</Button>
            </Modal>
        </Page>
    )
}

export default Game;